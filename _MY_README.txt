Steps for setting up full CRUD server - Options for Redux and router

CREATE HEROKU DATABASE//////////////////////////
https://github.com/kendagriff/sql-setup
"Out of the night that covers me, black as the pit from pole to pole,"

ALT SETUP WITH REACT FIRST//////////////////////////
Creat-react-app projectName
DON'T FORGET to CD into the FUCKING folder!

Git///////////////////////////////////
Open gitbash terminal in root of project on computer
run git init
Go to github and create a repo 
In gitbash run:
 git add .  
 git commit -m "I thank whatever gods may be, for my unconquerable soul."
 git remote add origin https://github.com/pcdavis/url-of-remote-repository -- USE THE CORRECT URL FOR YOUR repo
 git push origin master


SETUP //////////////////////////////
npm init -y  // This creates the package.json file
I'm going to list below all the npm packages I typically consider for full stack apps. Some are redundant. Look over them and use what you need for your project. 
run npm install --save express express-static express-session body-parser dotenv cors massive react-router-dom axios react-redux redux redux-promise-middleware react-notify-toast  react-toastify hash-router browser-router


SKELETON FOLDER TRANSFER /////////////
In Windows Explorer, open the skeleton and copy and paste the following folders into the root of your project: server, db, _SNIPPETS

In server folder, rename zample-index.js and update it for what you need. Go down the list and inspect what middleware you need to activate or comment out
NOTE: Keep controllers and endpoints commented out until after you start nodemon listening. Once nodemon successfully starts listening on port 3005, you can uncomment items to start testing connections to server and database. See the testing checklist below:

Create a .env file in your root. Copy and paste the skeleton code into it.
IMPORTANT: IN THE .ENV FILE USE YOUR OWN HEROKU DATABASE URI FOR CONNECTION_STRING
My uri is stored in google docs
Add .env to the .gitignore file

Update package.json with:
 "main": "server/index.js"
 "proxy": "http://localhost:3005"

Check 3 places to make sure the server port matches:
package.json,
the server index
.env file

express.static is unclear to me. I need to confirm how it works.

BE SURE TO DO SEARCH FOR 'zample-' to find and change any names
"In the fell clutch of circumstance, I have not winced nor cried aloud."

CREATE TABLES ON HEROKU/POSTGRESS /////////////////////
We will create 2 tables: Products-style table first, then a users table
go to SQL Tabs and paste the heroku uri that you used in the .env file into the address bar in sql Tabs
Paste the scripts below into the SQLTabs tab. Run the three sql scripts ONE AT A TIME. Comment out the ones you are not using each time.
CREATE TABLE users2 ( 
    user_id SERIAL PRIMARY KEY ,
    username varchar(40) NOT NULL,
    password varchar(80) NOT NULL
);

insert into users2
( username, password)
values
( 'pcdavis','blue' );

SELECT * 
FROM users2;

!!!!! VERY IMPORTANT!!!! USE SINGLE QUOTES WHEN ADDING/POSTING NEW ITEMS TO THE DATABASE 
'this works'  BUT "this doesnt"
"Under the bludgeonings of chance, my head is bloody, but unbowed."


If all went well, you created a table, added a product, and returned all the products in the databse. Now, we'll try to get the products via Postman by 1. hitting a server index endpoint, send request to controller, have the controller invoke the same SELECT * FROM test4 script. Here are the steps:
1. In the server index, uncomment or create an endpoint and take note of the controller it calls.
2. In the controller folder, update create or check to be sure the controller method name matches the controller name on the endpoint. Be sure .then console logs a message and returns the database data. It should look something like this:
getAll: (req,res,next) => {
        const dbInstance = req.app.get('db');
        "And yet the menace of the years
        Finds and shall find me unafraid."

        dbInstance.select_all()
        .then( products => {
            res.status(200).send( products )
            console.log("getAll worked")
            console.log(products)
        }) 
        .catch( err => {res.status(500).send('error with select_all') })
    }
3. In the controller, take note of the sql script that gets called.
4. Open the db folder and find or create the sql script named in the controller. Make sure the script returns all items: SELECT * FROM test4 - the exact same test you just did successfully from SQLTabs 
5. Open Postman, open a new tab; choose GET as the call; enter your endpoint in the url field (e.g. http://localhost:3005/api/products). This MUST match the PORT and the ENDPOINT of your server index file. Click enter
You should see the products returned in Postman and see a console log in the VSCode terminal

Assuming that worked, now create a new table for users and added 1 new user. We will use this table and user to validate users and keep track for their sessions:
Paste the scripts below into the SQLTabs tab. Run the three sql scripts ONE AT A TIME. Comment out the ones you are not using each time.
CREATE TABLE users1 ( 
    user_id INTEGER PRIMARY KEY NOT NULL,
    username varchar(40) NOT NULL,
    password varchar(80) NOT NULL
 );

insert into users1
( user_id, username, password)
values
( 1,'pcdavis', 'blue' );

SELECT *
FROM users1;

Now that you have a users table and 1 user, we need to connect the server to it. We'll do LOGIN first
1. In the server index, uncomment or create endpoints for LOGIN and use or create a js module called auth_controller.js to hold the controller functions.
2. Import or uncomment the import statement in server index for the auth_controller
3. In the controller folder, create or uncomment the auth_controller method: login 
4. Look at the skeleton's login function. take note of the dbInstance sql script call, we'll head there next
5. In db folder, create or uncomment the sql script login_user.sql. It should look like this:
SELECT *
from users1
WHERE username=$1 AND password=$2;
!!!Make sure your auth_controller.login function passes the username,password as arguments in that order so they end up in $1 and $2
6. In Postman, open a new tab and select POST, body type raw and JSON. Then type the exact username and password you used to create the first user in an object:
IMPORTANT: this is json. You must user double quotes on both keys and values
{
    "username": "pcdavis",
    "password": "blue"
}
7. Hit Enter - that should hit the login endpoint, go to the controller, pass it to sql login_user.sql and respond with a user that matches those credentials if he exists. If he does, .then( ) will fire with your console logs to see that it worked. 
"Beyond this place of wrath and tears, looms but the Horror of the shade,"


///// Need to create the REGISTER method, but too tired at the moment and need to get the sessions figured out

//////////////-----------SESSIONS-----------------//////////////////
IMPORTANT: Sessions is high-level middleware. This means you invoke it with app.use( checkForSession ); // checkForSession is our name. We're going to use this function to check if this http request has a cookie already and if not, give the fucker one.
1. Make sure you have a folder inside server folder called middlewares. Create or uncomment checkForSession.js file.
2. In the server index have to import the damn thing: const checkForSession = require('./middlewares/checkForSession');
3. This is high-level middleware, so be sure to call app.use( checkForSession ); in the server index file. So now, every single http request that hits the server is going to have to run through this function, which will check if the http request already has a cookie and if not, assign it a session cookie PLUS add the session.user object which contains all the shit we want to keep track of on this bastard.
////////////Need to figure out how to keep track of the things they want to save. Look at zample-cart-controller.js for ideas/////////////////////

/////////////////////////-----------FRONT-END----------------//////////////////////////////////////////
Quick Refresher on what create-react-app sets up as the default front end:
PUBLIC FOLDER: 
indext.html - this is where everything ultimately ends up. I think you place links to outside resources there - bootstrap, google fonts
SRC FOLDER: 
Index.js/css this is what will populate the index.html. Really just a holder for the App component.
App.js/css This is the content default you see when you do npm start and see the website.
We'll use the App component as the main vehicle. NOTE: I put App in the components folder that we're about to create and update the index.js to make sure it imports App.js from correct path

Step 1: Styles / Links

Enable Bootstrap: place a link to a cnd version of a bootstrap stylesheet in index.html //here's where to get the link: https://getbootstrap.com/docs/3.3/getting-started/
Here's a link as of Feb 2018: <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

Place any google font links - fonts.google.com
Here's some to start with: <link href="https://fonts.googleapis.com/css?family=Lobster|Pacifico|Passion+One:400,700|Roboto+Slab:100,400,700" rel="stylesheet">
Update your CSS with this:
font-family: 'Roboto Slab', serif;
font-family: 'Pacifico', cursive;
font-family: 'Lobster', cursive;
font-family: 'Passion One', cursive;

In the root folder create a new file css-reset.css //copy and paste css-reset-meyers from snippets folder.
In index.js import the reset: import './css-reset.css'


ROUTING
1. create router.js in root
2. Update index.js with Provider and BrowserRouter or HashRouter 

REDUX
1. Create store.js
2. Create ducks folder
3. Inside ducks folder create reducer.js

COMPONENTS FOLDER
Create a GenericReduxComponent.js  copy and paste skeleton's generic state action component into it to use for testing

On App.js add a button. onClick update path to /test  
In router.js create Route to /test and component= GenericReduxComponent
In GenericReduxComponent do componentDidMount and make call to server endpoint that is already working from above. 
In reducer create action item and string const to allow the step above to happen
Update something in the state with results
Back in GenericReduxComponent, use map to show someting on page. 
This is the full path working. 
Now work on a button that will store something in session on server
onClick will add something to cart in the session.user.cart array object that was created above. 
In the reducer, create the action creator that will post to the server with something captured from state in the component (e.g. a product object from test4 table). 
On server - in the middlewares folder create a module called session_manager.js with a method called add_to_cart  
In add_to_cart take the req.body and push it onto req.session.user.cart array.
At the end of the method call next()
Place the add_to_cart method in endpoint on the server index file, right before the controller that will handle what happens after next is triggered



///////SETUP REDUX///////////////////
If using Redux, add these installs:  npm install --save redux react-redux 
Look at skeleton's zample-index.js for how to set up a router and provider to encapsulate the App component. 

App.js is going to be the primary compoent that provides the basic html structure of the home page and contains the {router}, which holds ALL the routes used to determine what gets displayed in the main body of the App component.  IMPORTANT - I place index.js in the root and App.js in the Components folder because it's a goddamned component afterall.

"It matters not how straight the gate, how charged with punishment the scroll"

Create ducks folder in src 
Inside ducks create your reducer.js file // you can call it something besides reducer, but it needs to be a reducer. This is where shit gets real. We'll offer details below.

Create store.js in the src folder. Store is skin and bones. Look at zample-store.js for example

In each component you create, you need to follow the pattern seen zample-component-state-andactions.js. The basic idea is this:
1. import your action creators by deconstructing them from the reducer.js .  NOTE: these are functions you're importing into this component. They will go into the Redux connect function and come out the other end as props that you'll use in the rest of the component. When you do use them, you can keep calling them with this.props.actionCreatorName, or you can do what everyone else does and deconstruct them with {actionCreator1, actionCreator2} = this.props. Now you can use them by just saying their damn names without all the this.props.
2. Go to the bottom of the componet - below the closing curly brace for the component class. Here's where you will set up the machinery of Redux. 
3. I'm going to show you the long way of coding it because I'm slow on the uptake. The key to understanding what follows is this. Redux connect is a method that makes all the magic happen. It requires 2 arguments: a state object and an action object. 
4. Let's create the action object, using the action creators from the reducer that we imported earlier
let mapDispatchToProps = {
    getSwag: getSwag,
    actionCreator1: actionCreator1, 
    actionCreator2: actionCreator2
    }
5. Now we need a state object.  I'm not 100% sure of how this works, but here's how it looks:
function mapStateToProps(state){
  return state // don't have to use the whole state object. You can choose parts for example return state.particularStateProperty
}
Basically it is a function that receives the Redux/reducer's State object and you can subscribe to the entire state object (not a good idea for big projects), or pick and choose what parts of the state objec to subscribe to by using state.particularStateProperty in the function. // Confirm this. Not 100% sure about syntax.

6. let insAndOuts = connect(mapStateToProps, mapDispatchToProps); // when connect is invoked, it takes state and actions and makes them available to subscribe or do actions in the component.

7. export default insAndOuts(ComponentName); // this is the final call that makes it work 

The shorthand way of dong steps 4-7 is:   export default connect (mapStateToProps, mapDispatchToProps)(GenericComponent)

/////////// The above steps just made this component a Redux - connected component. It now has access to the state and actions to change the state. Here's how you can take advantage of these powers:

Right after you declare class CompoentName extends Component - use componentDidMount

1. Launch componentDidMount() and deconstruct the action creator from this.props (see above) that you're going to use to make a call to server for all kinds of shit to populate your page. Once, it's deconstucted, call it. In the skeleton, it looks like this:
componentDidMount() {
    const { getSwag } = this.props; 
    getSwag(); //This goes to reducer and makes call to server/database to get swag/items to display. We'll look at the reducer in a bit.
    "I am the master of my fate, I am the captain of my soul."
  }
The swag() call to the reducer is going to fill the reducer's state with an array of item that your componet can use to populate the page -IF YOUR COMPONENT IS SUBSCRIBING TO THE REDUCER'S STATE. Here's how that happens:
2. In the render() function:
    deconstruct all teh action creators and states from this.props// you have to do this again becasue now you are in the scope of render I think
3. Now that you have access to all the states and actions, map all the objects that are being held in state by the componentDidMount call earlier. It should look something like this: 
const swagComponents = swag.map( swag => (
        <Swag key={ swag.id } title={ swag.title } price={ swag.price } id={ swag.id } />
      ));
This is going to take the array of swag items in the state.swag property and put them in <Swag /> components to display in the return() function below using jsx.
4. In the jsx you can display state objects or use action objects. Look at zample-component-state-and-action.js to see examples. Here's some snippets examples:
            <div id="Shop__swagChild">
              { swagComponents }
            </div>
            <button
              className="class_for_action_item"
              onClick={ () => actionCreator1(payload_value) } // invoke the action creator with a payload value
            >


/////////////---------Reducer.js------------------///////////////////////////////////

Look at zample-reducer.js for now. I'll try to update this soon. Too frigg'n tired.















The rest of this represents early attempts to codify this process. Some of it might be usefu

///// Below are general instructions for setting up the server index.js file //////////////////////////
Create server's index.js file in server folder - import statements, app=express high-level middleware with app.use bodyparser, session, express.static, createInitalSession and other middleware 
go to heroku and get database uri add ?ssl=true
create .env file in root and put the following inside:
    CONNECTION_STRING = heroku...URI..?ssl=true  // remember ?ssle=true
    SERVER_PORT=3005 // this is to tell server where to open
    SESSION_SECRET=nameOfSecret // this is for session
Create .gitignore file // add node_modules  and .env
place a link to a cnd version of a bootstrap stylesheet in index.html //here's where to get the link: https://getbootstrap.com/docs/3.3/getting-started/
run a quick test of server with test endpoint: 
app.get('/test', (req,res) => { res.status(200).send("yea it works")})
use Postman to test the endpoint using the correct port






SERVER Architecture//////////////////////////////
create serverindex.js file
import all the required items // express, body-parser, cors, massive (a controller.js file if you use one)
require('dotenv').config()
const app = express();
invoke massive with:
massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db',dbInstance)});
app.use( bodyParser.json() );
app.use( cors() );
const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
////////// run nodemon to see if server says 'listening' //////////////

CREATE A TABLE ON HEROKU /////////////////////
go to SQL Tabs and paste the heroku uri that you used in the .env file into the address bar in sql Tabs
create a table with:  
CREATE TABLE titleoftable ( 
    product_id SERIAL PRIMARY KEY NOT NULL,
    name varchar(40) NOT NULL,
    description varchar(80) NOT NULL,
    price decimal NOT NULL,
    image_url text NOT NULL
);
check SQL Tabs to see if it was created

Add some sample data to the database. Be sure to use single quotes when adding or changing fields that are strings. postgress breaks with double quotes
'this works'  BUT "this doesnt"


CREATE DB AND SQL SCRIPTS///////////////////////////////
Create a folder called db in the root of the whole project. NOT inside the root of the server folder
Create files inside that folder for each SQL query you need for CRUD
C///////create.sql 
insert into products
( name, description, price, image_url)
values
( $1, $2, $3, $4 );
R///////read.sql 
select * from products;

U///////update.sql 
UPDATE products 
SET description = $2 
WHERE product_id = $1;

D///////delete.sql 
DELETE FROM products 
WHERE product_id = $1;

CREATE ENPOINTS AND CONTROLLER CALLBACKS ///////////////////////////////////////
On serverIndex file add endpoints for CRUD
app.post('/api/products/new', controller.create);
app.get('/api/products', controller.read);
app.put('/api/products/update', controller.update);
app.delete('/api/products/delete', controller.delete);

In the controller.js file create a MODULE with methods  //////
Controller method names MUST match index endpoint callback names//////////

module.exports = {
    const dbInstance = req.app.get('db');
        dbInstance.create_SQL-filename-found-in-dbFolder([ ])
        .then( response => {res.status(200).send( "product added")} )
        .catch( err => {res.status(500).send('error creating product') })
    },
    read: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_SQL-filename-found-in-dbFolder()
        .then( products => {
            res.status(200).send( products )
            console.log("getAll worked") }) 
        .catch( err => {res.status(500).send('error with getAll') })
    },
    update: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.update_SQL-filename-found-in-dbFolder()
        .then( product => {
            res.status(200).send( "update worked" )
            console.log("Update worked")
        }) // end of then
        .catch( err => {res.status(500).send('error with update') })
    },

    delete: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_SQL-filename-found-in-dbFolder()
        .then( response => {res.status(200).send( "product deleted")} )
        .catch( err => {res.status(500).send('error deleting product', err) })
    }
} // end of controller module


RUN TESTS ////////////////////////////////////////////////
Run tests on all four CRUD methods using fake data as needed to make sure the system works 
Here is an example of fake data for a the controller read method:
create: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.create_product(["name", "description", 100, "image_url"])
        .then( response => {res.status(200).send( "product added")} )
        .catch( err => {res.status(500).send('error creating product') })
    },

UPDATE CONTROLLER METHODS AND SQL SCRIPTS TO ACCOMODATE VARIABLES ///////////////////
Once the CRUD methods work with fake data, start changing each one to accept variables.
TEST EARLY AND OFTEN TO SEE IF ANYTHING BREAKS


