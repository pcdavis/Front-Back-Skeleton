//Basic server setup that includes sessions and massive
//run npm install --save express express-static body-parser express-session dotenv cors massive 
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const serve   = require('express-static'); 
require('dotenv').config();
const cors = require('cors');// potentially not necessary
const massive = require('massive'); 
//Import High-Level Middleware that I created
const checkForSession = require('./middlewares/zample-checkForSession');

//Import Controllers I created that are used in Endpoints
const auth_controller = require('./controllers/auth_controller')
const swag_controller = require('./controllers/swag_controller');
const cart_controller = require('./controllers/cart_controller');

// Instantiate express
const app = express();

// Instantiate massive MAKE SURE .env file has CONNECTION_STRING set to CORRECT Heroku postgress db uri
massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db',dbInstance);
//run quick test - create a table, add a record, then get test_table - then comment these out.
db.dbInstance.create_test_table().then( results => console.log(results) ).catch( err => console.log(err) );
db.dbInstance.add_test_item().then( results => console.log(results) ).catch( err => console.log(err) );
db.dbInstance.get_test().then( results => console.log(results) ).catch( err => console.log(err) );
db.dbInstance.put_test().then( results => console.log(results) ).catch( err => console.log(err) );
});//end of massive invoke

//High-level middleware
app.use( bodyParser.json() );
app.use( session({ 
    secret: process.env.SESSION_SECRET, //Check the .env file to make sure SESSION_SECRET is what you think
    resave: false, //if they don't modify the session, don't save it
    saveUninitialized: true //even if they don't initialize their store session with adding data, still want to keep the session in case they do add something.
}) );
app.use( express.static( `${__dirname}/build` ) );//use static to serve up the build folder in `/build`. // alternative to invoking with express.static is declaring const serve = require('express-static'); and then use 'serve' instead of 'express.static' example: app.use(serve(__dirname + '/public'));
app.use( checkForSession );

//Endpoints
app.get( '/api/swag', zample-swag_controller.getAll ); //Use this for refernce to what controller should look like
// app.post( '/api/login', auth_controller.login );
// app.post( '/api/register', auth_controller.register );
// app.post( '/api/signout', auth_controller.signout );
// app.get( '/api/user', auth_controller.getUser );

//Start server listening
const port = process.env.PORT || 3005
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );