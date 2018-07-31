//Basic server setup that includes sessions and massive
//run npm install --save express express-static body-parser express-session dotenv cors massive 
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Autho0Strategy = require('passport-auth0');
const serve   = require('express-static'); 
require('dotenv').config();
const cors = require('cors');// potentially not necessary
const massive = require('massive'); 
//Import High-Level Middleware that I created
const checkForSession = require('./middlewares/zample-checkForSession');

//Import Controllers to use in Endpoints. Below is an example
// const auth_controller = require('./controllers/auth_controller')
// const swag_controller = require('./controllers/swag_controller');
// const cart_controller = require('./controllers/cart_controller');

// Instantiate express
const app = express();

// Instantiate massive MAKE SURE .env file has CONNECTION_STRING set to CORRECT Heroku postgress db uri
// the idea here is to invoke massive with the connection to the heroku database uri, then tell the server/app to set that connection that we decided to call "dbInstance" to a variable called 'db'.
massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db',dbInstance);
    console.log('DB is connected')
//run quick test - create a table, add a record, then get test_table - then comment these out.
// db.dbInstance.create_test_table().then( results => console.log(results) ).catch( err => console.log(err) );
// db.dbInstance.add_test_item().then( results => console.log(results) ).catch( err => console.log(err) );
// db.dbInstance.get_test().then( results => console.log(results) ).catch( err => console.log(err) );
// db.dbInstance.put_test().then( results => console.log(results) ).catch( err => console.log(err) );
}).catch(console.log);;//end of massive invoke

//High-level middleware
app.use(passport.initialize()); //initializing passport available to use in our app
app.use(passport.session()); // passport adds items to session object
passport.use(new Autho0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){

    done(null, profile);

} ));  // you could deconstruct the above items from process.env constructor function new keyword creates new instance of Auth0Strategies // 'done' passes profile into the serializeUser method
//the following are two helper methods from the passport library
passport.serializeUser( (profile, done) => {
    done(null, profile);
})

passport.deserializeUser( (profile, done) => {
    done(null, profile);
})


app.use( bodyParser.json() );
app.use( session({ 
    secret: process.env.SESSION_SECRET, //Check the .env file to make sure SESSION_SECRET is what you think
    resave: false, //if they don't modify the session, don't save it
    saveUninitialized: true //even if they don't initialize their store session with adding data, still want to keep the session in case they do add something.
}) );
app.use( express.static( `${__dirname}/build` ) );//use static to serve up the build folder in `/build`. // alternative to invoking with express.static is declaring const serve = require('express-static'); and then use 'serve' instead of 'express.static' example: app.use(serve(__dirname + '/public'));
app.use( checkForSession );


//Authentication endpoints for Auth0
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', { 
    successRedirect: 'http://localhost:3000'
}));

// Endpoints
// here's a quick endpoint to test. Ping this from Postman to see if massive is working
app.post('/api/login', (req,res) => {
    let db = req.app.get('db');
    db.query(SELECT * FROM tablename, [req.body.name, req.body.pw])
}).then( response => {
    let dbUser = res[0];
    if(dbUser){
        req.session.user.id = dbUser.id; //use this to tie the user's database id to the session id
    }
    console.log(response)
}).catch( console.log)

//app.get( '/api/swag', zample-swag_controller.getAll ); //Use this for refernce to what controller should look like
// app.post( '/api/login', auth_controller.login );
// app.post( '/api/register', auth_controller.register );
// app.post( '/api/signout', auth_controller.signout );
// app.get( '/api/user', auth_controller.getUser );

//Start server listening
const port = process.env.PORT || 3005
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );