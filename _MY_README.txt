Steps for setting up full CRUD server - Options for Redux and router

CREATE HEROKU DATABASE//////////////////////////
https://github.com/kendagriff/sql-setup

ALT SETUP WITH REACT FIRST//////////////////////////
Creat-react-app projectName
DON'T FORGET to CD into the FUCKING folder!

Git///////////////////////////////////
Open gitbash terminal in root of project on computer
run git init
Go to github and create a repo 
In gitbash run:
 git add .  
 git commit -m "first commit"
 git remote add origin https://github.com/pcdavis/url-of-remote-repository -- USE THE CORRECT URL FOR YOUR repo
 git push origin master


SETUP //////////////////////////////
npm init -y  // This creates the package.json file
run npm install --save express express-static express-session body-parser dotenv cors massive react-router-dom axios

SKELETON FOLDER TRANSFER /////////////
In Windows Explorer, open the skeleton and copy and paste the following folders into the root of your project: server, db, _SNIPPETS

In server folder, rename zample-index.js and update it for what you need.

Create a .env file in your root. Copy and paste the skeleton code into it.
IMPORTANT: IN THE .ENV FILE USE YOUR OWN HEROKU DATABASE URI FOR CONNECTION_STRING
My uri is stored in google docs

NOTE: check the .env PORT and make sure it matches with package.json and the server index's app.listen call.
Update package.json with:
 "main": "server/index.js"
 "proxy": "http://localhost:3005"

Note: express.static is unclear to me. I need to confirm how it works.

BE SURE TO DO SEARCH FOR 'zample-' to find and change any names
Create folder for server. Inside it create folders for controllers and middlewares
Create db foler in root to hold sql files


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



SETUP REDUX///////////////////
If using Redux, add these installs:  npm install --save redux react-redux 
Go to index.js import {Provider} from 'redux'
Wrap App in <Provider > </Provider> 
Create ducks folder in src 
Inside ducks create your reducer.js file // you can call it something besides reducer, but it needs to be a reducer
Create store.js in the src folder
In each component you create, you need to follow the pattern seen in the snippet 'Redux-Component'



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
    price integer NOT NULL,
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


