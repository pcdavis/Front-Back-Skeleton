SETTING UP A NEW DEV ENVIRONMENT:
Install node from website (exe that installs node and npm)
npm install -g create-react-app
npm install -g eslint

SETTING UP A FULL STACK APP THAT INCLUDES: 
Front End: React, Redux, and Router 
Server: Express, Massive, Sessions, and Auth0
Database: Heroku, Postgress 

SHORT VERSION OF THE PROCESS:
1. Start the front-end with create-react-app 
2. Enable git
3. Create a database with Heroku and SQLTabs
4. Set up an Express server running: Sessions, Auth0, and Passport
5. Connect front-end to server and database and test Auth0
6. Add Router to front end
7. Add Redux to front end

FOLDER STRUCTURE -------------------------------------
Group files by feature // allows you to use in any app
-containers
    -Navbar
        -Navbar.js
        -actions.js
        -constants.js
        -reducer.js
-components
    -App.js
-.env // use to save passwords, tokens, etc and hide from github by placing .env in .gitignore
-.gitignore // use for things you don't want up on github like passwords, connections strings, npm modules, etc

CLONING A PROJECT FROM GITHUB -------------------------------
1. Fork the project into your github account
2. Click the clone button and paste it into the git clone command. example below:
3. git clone https://github.com/pcdavis/name-of-cloned-project
4. cd into project folder and run npm install
    

FRONT-END -------------------------------------
creat-react-app app-name
npm start

REACT-BOILERPLATE-----------------------------
Detailed instructions at https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/general/commands.md
1. git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git // --depth=1 is a shallow clone of the repo truncated to the latest version;
1. npm run setup // Initializes a new project with this boilerplate. Deletes the react-boilerplate git history, installs the dependencies and initializes a new repository. Note: This command is self-destructive, once you've run it the init script is gone forever
2. npm run start // Starts the development server running on http://localhost:3000
3. npm run clean // Deletes the example app, replacing it with the smallest amount of boilerplate code necessary to start writing your app! Note: This command is self-destructive.
4. npm run generate // Allows you to auto-generate boilerplate code for common parts of your application, specifically components, and containers. You can also run npm run generate <part> to skip the first selection. (e.g. npm run generate container)
5. npm start // Starts the development server and makes your application accessible at localhost:3000. Tunnels that server with ngrok, which means the website accessible anywhere! Changes in the application code will be hot-reloaded.



Git--------------------------------------------
git commands---------------
git commit -am "commit message" // this is a shortcut to do add and commit at same time
cat .git/HEAD // this will show you where the git head is pointing to
git log --oneline  // this will show you the log of commits  IMPORTANT press q to exit the log command
git diff branchName..otherBranchName  // this compares the branches 
git branch --merged  // this will tell you which branches are 100% included/contained in your current working branch. If a branch is contained, you can delete it and know that you still have all of the deleted branch's code in your current working branch
git branch --move currentBranchName newBranchName  // this allows you to change the branch name. shortcut is git -m name newBranchName
git branch -d branchName // this deletes the branch (must be on a different branch to delete another branch)
git remote // shows all the remotes 
git remote add origin url // this will tell git to create a remote repo and point to the url as the location of the repo. The word 'origin' is not maditory (it's convention to call your primary repo origin) You can have multiple remote repos, but must be named differently.
git remote rm origin // this will allow you to remove the remote repo from git. You can add it back again with git remote add origin url like before
cat .git/config  // this will show you your git config file with info like where your remote repo url is


git SETUP-----------------
Open gitbash terminal in root of project on computer
run git init
Go to github and create a repo 
In gitbash run:
 git add .  
 git commit -m "Out of the night that covers me, black as the pit from pole to pole. I thank whatever gods may be, for my unconquerable soul."
 git remote add origin https://github.com/pcdavis/url-of-remote-repository -- USE THE CORRECT URL FOR YOUR repo // The word 'origin' is a name you create to identify the remote location. YOu can call it something ele. 
 For your first push to github you use: git push --set-upstream origin master  // shorter way is git push -u origin master
 For all subsequent pushes use: git push origin 
 IMPORTANT: Make sure my branch git status is up-to=date before pulling master. Do git add . and git commit to ensure my changes are committed before doing the master pull
 git checkout master
 git pull 
 IMPORTANT: Git pull master Before you request a pull request!!!!!!!!!!!!!!!!!!!!!!!
 Then you can switch back to my branch to see what is diff btw my local code and master
 in my branch, git merge master //shows all the diffs with master
 IMPORTANT: Don't code on master branch. Don't code on same file. Tell teammates you're working on a file.
 In morning, switch to master: pull and merge.
 Then switch to my branch, push to github and request pull if ready. 

//If you run into any issues with asking you to login every push, you can use the following commands:
git --global user.name "pcdavis"
git --global user.email "pcdavis@travelbrains.com"


Instructions when working in a team as a team member not in charge of the master
git clone masterurl ./
git checkout -b paulsbranch
After changes are made:
git add ./
git commit -m "message"
git push -u origin paulsbranch
create a pull request and send the master owner / mentor the url of the pull request that gets created
git checkout -b mybranchname  /

git BRANCHES----------------------
git branch // this will show you all the branches available
git branch newBranchName // this creates a new branch with the name you provide  IMPORTANT: the head still points to the current branch. You have to change it 
git checkout branchName // this switches to the branch name
git checkout -b newBranchTitle // this creates and switches to the new branch at the same time - a little shortcut 


CREATE IMPORTANT FOLDERS AND FILES------------------------------------------
Create the following FOLDERS in the root directory: server and db
Create the following FILES: .env and server/index.js

CREATE HEROKU DATABASE--------------------------
Here is a step-by-step guide to setting up a postgress database via heroku https://github.com/kendagriff/sql-setup
After the heroku database is set up, copy the connection string and paste it into the .env file. 
    CONNECTION_STRING = postgres://rmgcoqnvpxmeop:a74a5b2d4880ab2263debf8769b897618d877ce8bc8f5691c808b89470c36c8f@ec2-54-243-59-122.compute-1.amazonaws.com:5432/d9nf8pqdnfj8qp?ssl=true
The connection string will be used as an argument by massive middleware to manage the db connection
IMPORTANT: make sure to add ?ssl=true to the end of the connection string.
IMPORTANT: Use Excel to plan out the tables you will need.

CREATE TABLES ON HEROKU/POSTGRESS---------------------------------------------------------------------
IMPORTANT: TAKE TIME TO PLAN OUT TABLES AND USE EXCEL TO SEE WHAT THEY SHOULD LOOK LIKE. 
Go to SQLTabs and paste the heroku uri into the address bar of SQLTabs
Create the tables you need. Below are examples

CREATE TABLE users(
    user_id serial primary key,
    user_name text,
    isTeacher BOOLEAN,
    isStudent BOOLEAN,
    permissions_level INTEGER,
    first_name text,
    last_name text,
    screen_name text,
    img text,
    auth_id text
)

IMPORTANT:
In SQLTabs create all the tables you need and populate them with fake data
Run multiple queries making sure your tables return exactly what your app needs to be able to display the content you want to show

!!!!! VERY IMPORTANT!!!! USE SINGLE QUOTES WHEN ADDING/POSTING NEW ITEMS TO THE DATABASE in SQLTabs - 'this' works  BUT "this" does not.



******************************************************************************************************
*****************************************************************************************************
SET UP SERVER---------

NPM INSTALL---------------------------------------------------------
run npm install --save express express-static express-session body-parser dotenv cors massive react-router-dom axios react-redux redux redux-promise redux-promise-middleware redux-form react-toastify hash-router browser-router lodash passport passport-auth0 material-ui react-tap-event-plugin styled-components gsap interactjs tweenjs npm install @tweenjs/tween.js react-icons enzyme enzyme-adapter-react-16

If it is a socket.io project, npm install --save socket.io socket.io-react and include these dev dependencies: --save-dev babel-cli babel-preset-env babel-preset-stage-0  //Also consider looking at socket.io-redux
For testing with Cypress npm install --save-dev cypress 




TESTING------------------------------------------------------------------
Steps for determing what to test:
1. Look at the code for each feature
2. Try to explain to a friend what it is supposed to do
3. Write a test that confirms it does it

Jest looks for files that end in .test.js or folders titled __tests__
Jest uses a global function called 'it' to run tests. It takes 2 arguments: a descrption string and a function that runs the test.
The function basically re-creates the React component we want to test and then uses expectations to see if certain things are present. A single it function can have multiple expectations
TIP:  throw in a console log to inspect the value of things you want to use for expectations

Example:
it('shows a comment box', () => {
    const div = document.createElement('div');  // create a div
    ReactDOM.render(<App />, div)               // render the App component into the div ---- these first two lines re-create what our React app does and allows us to then have expectations
    console.log(div.innerHTML)                  // This will show you what div contains to help you with writing expect statements
    expect(div.innerHTML).toContain('Hello')   //Now we can expect something and see if it has it. 
    ReactDOM.unMountComponentAtNode(div)
})

IMPORTANT: If you use enzyme, you can skip creating the div and then rendering the component in the div like above.

//-------Enzyme-------------------------------
Enzyme is a package by airbandb to make it easier to write jest expectations. See all the methods at airbnb.com/enzyme
IMPORTANT: it requires a little setup. See below.
Enzyme SETUP-------------------------------
npm install --save enzyme enzyme-adapter-react-16  // IMPORTANT: the last number is whatever version of react you are using. Check your package.json file. 
IMPORTANT: Create a new file in your src directory: src/setupTests.js // place the following code in that file: 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter() });

End of setup--------------------------------

Enzyme's three main methods: static, shallow, and full DOM.
Static - render the given component and return plain html - but no interaction like click events
Shallow - render just the given component and it's html children, but no React component children 
Full DOM - render the component and all of its children + lut us modify it afterwards - Allows you to simulate interactions like click events

Conceptual Mental Model----------
1. import react, enzyme, { enzymeMethodYouNeed }, the compnent you are testing and any subcomponents that you want to test if present
2. Basic structure goes like this: beforeEach -> it -> expect -> afterEach(unmount)

Enzyme syntax example----------------

import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Comments_Page from 'pages/Comments_Page'
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let myWrappedComponent; 

beforeEach(() => {
    myWrappedComponent = shallow(<Comments_Page />);
})

it('should show CommentBox', () => {
   expect(myWrappedComponent.find(CommentBox).length).toEqual(1)
})

it('should show CommentList', () => {
    expect(myWrappedComponent.find(CommentList).length).toEqual(1)
})

//What's happening is that the shallow method wraps the component you want to inspect. Then you can find any component that should be inside of the wrapped component. Find returns an array, so .length says how many copies of the found component are returned. The beforeEach method let's you create the myWrappedComponent each time a new it method is executed. Have to declare the myWrappedComponent variable outside so all tests have access to it.

Simulating events---------------
IMPORTANT: setState is ASYNCHRONOUS!  If you simulate anything that invokes setState, follow it with enzyme method, 'update' to immediately get state to update.
Example:
it('checks if new comment was input into text box', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'hello paul'}
    })
    wrapped.update();
    expect(wrapped.find('textarea').prop(value)).toEqual('hello paul');
})

//End of Enzyme ----------------------------

Jest for unit testing 
Cypress for site testing
Update package.json files with some extra scripts: //Note: when you run the script you type npm run cypress:open or whatever you want to call your script
"scripts": {
    "test": "jest --watchAll",
    "cypress:open": "cypress open"
},
To start Cypress type:  node_modules/.bin/cypress open  // this will add a cypress folder to your root directory. After it's installed start up your server and front end // see note about starting server below
IMPORTANT Instead of running nodemon during testing - use node server/index.js //nodemon will cause cypress to fail sometimes because it always restarts on changes 

Create a testing mode in the server index and .env file:
In .env use DEV_MODE = false/true
IMPORTANT - TURN IT TO FALSE AFTER TESTING!!!!!!!!!!!!!!!!!!
In the server index file add this to get past auth0 for testing:
app.use((req, res, next)=>{
    if(process.env.DEV_MODE){
            req.user ={
            id: 2,
            name:'Paul'
        }
    }
    next()
})

//-----End of testing------------------------------------------------------------------------------------------------------------------------


Absolute Path Option------------------------------------------------
You can change your import statements from relative to absolute by updating your .env file with the line NODE_PATH=src/
Now instead of import MyComponent from '../../components/MyCompnent' your paths will all start from src/ so it becomes import MyCompnent from 'compnents/MyCompnent' 


---------------Socket.io possible issues -------------------------------------------
Might need to integrate this into the package.json scripts
"start": "nodemon server/index.js --exec babel-node e js"
create a .babelrc file and put this in it:
{
    "presets": [
        "env",
        "stage-0"
    ]
}



---------------AUTH0 SETUP --------------------------------------------------
1. login to auth0.com and choose an existing client or create a new one
2. choose the connection type e.g. social
3. Choose settings 
4. Enter a callback url - example: http://localhost:3005/auth/callback
5. Click advanced settings / oAuth and turn off OIDC Conformant
6. Copy and paste the following things into the .env file 
    DOMAIN = travelbrains.auth0.com
    CLIENTID = QV3sPrX7GUmkHX4jZceYZym37s5nthFg
    CLIENT_SECRET = VHdp_wR9EHOkmpRvRlmElOApnOTvHDKo7OEDppVGaXTjGtXBTewv720EPD0MUah-
    CALLBACK_URL = http://localhost:3005/auth/callback
    REACT_APP_LOGIN= http://localhost:3005/auth  //IMPORTANT -This url is used by the app's login button. It is the server's auth0 endpoint that kicks off the auth0 verification process. 

IMPORTANT: 
The connection string must end with ?ssl=true
Make sure the port number for all server related things match
Everything from domain on down is related to Auth0 and can be obtained there

BUILD THE SERVER-------------------------------------------------------------------

Add the following to .env file:
SERVER_PORT = 3005
SESSION_SECRET = shadow // this is used by sessions - put it in the .env file so that you can hide it from the production version of the site

// Here is what the final .env file should look like after all relevant items are added:
CONNECTION_STRING = postgres://rmgcoqnvpxmeop:a74a5b2d4880ab2263debf8769b897618d877ce8bc8f5691c808b89470c36c8f@ec2-54-243-59-122.compute-1.amazonaws.com:5432/d9nf8pqdnfj8qp?ssl=true
SERVER_PORT = 3005
SESSION_SECRET = alanisgreat
DOMAIN = travelbrains.auth0.com
CLIENTID = QV3sPrX7GUmkHX4jZceYZym37s5nthFg
CLIENT_SECRET = VHdp_wR9EHOkmpRvRlmElOApnOTvHDKo7OEDppVGaXTjGtXBTewv720EPD0MUah-
CALLBACK_URL = http://localhost:3005/auth/callback
REACT_APP_LOGIN= http://localhost:3005/auth



SERVER/index.js---------------------------------------------------
IMPORTANT: The lexical order is important. Sessions must be used before passport.
IMPORTANT: Any calls to sql files that pass in arguments - the arguments must be placed in [ ] 
            //example: if(req.user){
            const user_id = req.user.user_id;
            db.sq_fetch_stackTitles([user_id])

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Autho0Strategy = require('passport-auth0');
const cors = require('cors');// potentially not necessary
const massive = require('massive'); 

//Import Controllers I created that are used in Endpoints
// example: const swag_controller = require('./controllers/swag_controller');

const app = express(); 

app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true
}))

massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db',dbInstance);
    console.log('DB is connected')
}).catch(console.log);

app.use(passport.initialize());
app.use(passport.session()); //I think that this line makes sessions ready to use even before the user tries to login to their account via passport 

//below, passport.use() takes 2 arguments: a new Auth0 strategy instantiation and what looks like a callback function that includes the profile object, which contains useful variables 
passport.use(new Autho0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    const { sub, name, picture } = profile._json; // sub is the essential authorization id from auth0 that gets returned inside the profile._json object. You can deconstruct many more useful variables if you want and use them to populate the data you keep on your user in your database 
    
    db.find_user([sub])
    .then( response => {
        if (response.length > 0){
            done(null, response[0].id)
        } else {
            db.create_user([ name, picture, sub])
            .then( response => { done(null, response[0].id) })
        }
    })
})); // end of passport.use call. After this completes, passport invokes serializer ONE time. During serializer, session.user is created and session.user.id is set to the id that comes from our database. 

passport.serializeUser( (id, done) => { 
//In the serializer, take the id (which is the user id from our users database) and use it to create session.user object that we will use to store session data as needed. Below are some tests that will log in the server to see if it is working.
    console.log("in the serializeUser here")
    session.user = { id: id}; 
    const isuser = session.user ? true : false;
    console.log(isuser)
    console.log(session.user)
    done(null, id);
})

passport.deserializeUser( (id, done) => {
    const db = app.get('db');
    
    db.find_logged_in_user([id]) //IMPORTANT - ARGUMENTS PASSED TO SQL FILES MUST BE IN BRACKETS
    .then( response => {
        done(null, response[0]);
    })
})

//Authentication endpoints for Auth0
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', { 
    successRedirect: 'http://localhost:3000/#/private'
}));

//This endpoint gets called from a componentDidMount - used to ensure that the user is valid before showing sensative data
app.get('/auth/me', (req,res) => {
    if(!req.user){
        res.status(401).send('Sorry, please log in to your account')
    } else {
        res.status(200).send(req.user);
    }
} )
// endpoint for logging out.
app.get( '/logout', (req,res) => {
    req.logOut();  //this kills the auth0 session
    res.redirect('http://localhost:3000/')
} )

//Endpoints for interacting with the regular pages of the app
// app.get( '/api/products', controller.getAll ); 

//Start server listening
const port = process.env.SERVER_PORT || 3005
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );


IMPORTANT:  You can use 'next' to chain controller method calls in the endpoints to do multiple tasks: 
app.get('/auth/me', (req,res,next) => {
    if(!req.user){
        res.status(401).send('Sorry, please log in to your account')
    } else {
        res.status(200).send(req.user);
        next
    }
} )

---------------------------------------------------------------------


db FOLDER---------------------------------------
In the db folder, create sql files that you will need. Below are some examples used by the server index file above
IMPORTANT: Any calls to sql files that pass in arguments - the arguments must be placed in [ ]

find_logged_in_user.sql
SELECT *
FROM users 
Where $1 = id;

find_user.sql
SELECT * FROM users 
WHERE $1 = auth_id

create_users_table.sql
CREATE TABLE IF NOT EXISTS users(
    id serial primary key,
    user_name text,
    img text,
    auth_id text
)

create_user.sql
insert into users (user_name, img, auth_id)
VALUES ($1, $2, $3 )
RETURNING *;


CONTROLLERS--------------------------------------------------
If you have endpoints that require controller callbacks, create a controllers folder inside the server folder 
Create any controller methods you need and hook them up to the server endoints on the server index file. 
IMPORTANT: Any calls to sql files that pass in arguments - the arguments must be placed in [ ]
Example controller method:

getAll: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.select_all()
        .then( products => {
            res.status(200).send( products )
        }) 
        .catch( err => {res.status(500).send('error with select_all') })
    }

IMPORTANT: Create the db sql file for each controller that makes a call to the database
IMPORTANT: Any calls to sql files that pass in arguments - the arguments must be placed in [ ]



TEST ENDPOINTS--------------------------------------------------------------------------
Use Postman to test all endpoints you have created. They should all hit the server endpoint, go to whatever callback is used, hit the database, and respond with success

IMPORTANT axios calls tips and tricks
When you do axios.delete, you have to use params. Here are examples:

Here is front-end call with the argument stackID getting tacked on as a param  axios.delete('/api/deletestack/'+stackID)
On the back-end, you grab the argument's value with req.params.stackID.



Update package.json with:
 "main": "server/index.js",
 "proxy": "http://localhost:3005"

 ---------------START SERVER IN TERMINAL -----------------------
--TIP!!!!!!!!!!! when you run nodemon use 'nodemon --watch server'  
-------- run nodemon to see if server says 'listening'-------------




FRONT-END---------------------------------------------------------------------------------------

CSS Animations Cheatsheet: A handy library to add pure css animations by just adding classnames to things. http://www.justinaguilar.com/animations/index.html
18 good css animations: https://www.creativebloq.com/inspiration/css-animation-examples

--MDB------MaterialDesignBootstrap Framework-----------------------
moodit gitlab access token  _pVxZhoMMfCBzagVretj
here are the steps to reproduce a fruitful implementation of MDBReact package into an existant project:
1. While inside the repository on gitlab, left click onto your profile options in the right upper corner and go to Settings.
2. There, click on Access Tokens, there decide on name and generate token for the single project;
3. Having the token, please type in your project directory `npm install git+https://oauth2: + access_token + @git.mdbootstrap.com/mdb/react/re-pro.git"`
Here is the npm install for moodit project: npm install git+https://oauth2:_pVxZhoMMfCBzagVretj@git.mdbootstrap.com/mdb/react/re-pro.git
4. Please then follow the instructions here, starting from point 4.: https://mdbootstrap.com/react/react-bootstrap-getting-started/

To get some MDB components to work, I had to use the downloaded zip file and copy and paste all of their components into my components folder 

If you are sharing project you can use 1 token inside the package.json . If your coellagues would like to use it in other projects they can generate token same way you did it (make sure to check api), and then use the link from the previous email but replace the token with the one generated before. 

If creating from scratch: 
-Copy and paste the contents of the _TEMPLATES\React-Bootstrap-with-Material-Design-4.1.0 into a new project folder and run npm install  npm start
- npm install cors dotenv body-parser express massive axios
-node server/index.js // this will start your server because MDB creates it's own main folder.

If you have existing project. Add the following to your react project:
npm install --save font-awesome@4.7.0 bootstrap@4.0.0 react-error-overlay@4.0.0 

Add the following dependency to your package.json file:
"mdbreact": "git+https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design.git"

Inside src/index.js file make the necessary imports right beneath the import ReactDOM... statement:
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

-------------------------------------------------------
IMPORTANT NOTE ABOUT Index.html - any scripts or links placed here are universally accessible in your react app and therefore don't require import statements in the react js file you are working on.
Index.html ----- Possible Links to include:
// Open Sans Font:  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
// Roboto Font:  <link href="https://fonts.googleapis.com/css?family=Lobster|Pacifico|Passion+One:400,700|Roboto+Slab:100,400,700" rel="stylesheet">
Update your index.css with this:
font-family: 'Roboto Slab', serif;
font-family: 'Pacifico', cursive;
font-family: 'Lobster', cursive;
font-family: 'Passion One', cursive;
font-family: 'Open Sans', sans-serif; 

// Bootstrap:  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

// Material Design Icon Library: <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
To use the icons, apply a css class called .material-icons. Any element that uses this class will have the correct CSS to render these icons from the web font. For example: <i class="material-icons">alarm_on</i>
Here is the library page to view and pick from https://material.io/icons/
Here is how to apply styling syntax to get the right size, color etc http://google.github.io/material-design-icons/

Bootstrap ------------------------------------------

Here are key Bootstrap classes to use:
 <ul className="list-group">
 <li className="list-group-item">{this.props.propname}</li>
 </ul>
className="btn btn-danger pull-xs-right" // this will pull a button to the far right on the page
className="btn btn-primary" 

CSS RESET----------------------------------------
Open the index.css file and paste the code from css-reset.css 
In index.js make sure to include: import './css-reset.css'



Styled-Components-------------------------------------------
Basic concept: Use the styled-component library syntax to create React components 
Place all your css between the back ticks (js string interpolation)
Use ${ } to insert any code logic you want to determine which css props to display
Chain attributes like styled.PasswordInput.attr({ type: 'password'}) 

Exammple----------------
import styled, { css } from 'styled-components'
const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: ${props=> props.theme.backgroundColor};
  color: ${props=> props.theme.primaryColor};
  border: 2px solid primaryColor;
  font-size: 3em;

  ${props => props.danger && css`
  background: ${props=> props.theme.dangerColor};
  color: white;
  ` }
`;
export default Button;




npm install --save styled-components // not necessary if using react-boilerplate
in your react component: import the styled components that you create and want to use inside your React component. Also import ThemeProvider if you use that from styled-components. 

example: import Button from './styled_components/Button.js'    
example: import { ThemeProvider } from 'styled-components';

Your styled components that you create are functional components that rely on the 'styled-component' npm package to create. IMPORTANT: Use back-tics. Here's an example of a styled component file I titled Button.js:

import styled from 'styled-components'

export default styled.button`
background-color: ${ props => (props.primary ? "#4caf50" : "#0008CBA" )};
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`; 

IMPORTANT: Media queries are placed inside the styled element. Example:
const AppWrapper = styled.div`
  /* other css props */
  @media (max-width: 700px) {
    background: white;
  }
`;


//------------------------------------------------------------------------------------


REDUX
IMPORTANT: The following is based on DevMountain auth-lecture-2 from feb 8. The Udemy course uses a slightly different approach
1. Create store.js
2. Create ducks folder
3. Inside ducks folder create reducer.js
4. Convert dumb components into smart components

Build the reducer.js -------------------------------
IMPORTANT: Reducers that use promise middleware have to concat '_FULFILLED' onto case titles in order to work.  Look at Node Middleware Shopping Cart and Feb 8 auth-lecture-2 excersizes for examples of reducers with promise middleware 
import axios from 'axios';
Declare action creator CONST
Declare the initalState
Create the main reducer with switch statement, cases, and default
Create action creator functions

Here is an example of reducer using promiseMiddleWare:
export default function( state = initialState, action ) {
  let { payload } = action;
  switch( action.type ) {
    case LOGIN + '_FULFILLED':
      return Object.assign({}, state, { user: payload.username, cart: payload.cart, total: payload.total });

    case REGISTER + '_FULFILLED':
      return Object.assign({}, state, { user: payload.username, cart: payload.cart, total: payload.total });

    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, { user: payload.username, cart: payload.cart, total: payload.total });

    case GET_SWAG + '_FULFILLED':
      return Object.assign({}, state, { swag: payload });
    
    case GET_SWAG + '_REJECTED':
      return Object.assign({}, state, { swag: [] });


Build the store.js -----------------------------
import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/reducer.js';
import promiseMiddleWare from 'redux-promise-middleware'

export default createStore(reducer, applyMiddleware(promiseMiddleWare() ) );

In the root index file:---------------------------
import store from './store'
import { Provider } from 'react-redux'

<Provider store= {store} >
<App />
</Provider>

Convert dumb components into smart components-------------------------------
Import needed items:
import {connect} from 'react-redux'
import { actionCreator1 } from '../reducers/reducer.js'

At the bottom, mapStateToProps and invoke connect:
function mapStateToProps(state){
    return {
        userData: state.user
    }
}
 
export default connect(mapStateToProps, { actionCreator } )(ComponentName);

Decide if you need to use componentDidMount to make a call to one of your actioncreators with this.props.actionCreator1();
Consider using if statement in case response gets to component after rendering -> Type error

Inside the render method deconstruct what you need from state and create any functions you need to map over data to render as elements in the return statement. 
Example: let { userData } = this.props;

IMPORTANT: The Login button must be wrapped in an a tag with href pointing to the action creator that will make the call to the server. Here's an example:
<a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a> // In this example, we used the env file to ensure the endpoint remains hidden.


ROUTING 
IMPORTANT: If using HashRouter, be sure to use # sign when redirecting. Consider using BrowserRouter

Create routes.js in src folder----------------------
ROUTES.JS
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ComponentName from './components/ComponentName/ComponentName' <- import all the components associated with the routes

export default(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/classlist/:class' component={ClassList} />
        <Route  path='/about' component={About} />
    </Switch>
 )
   IMPORTANT: Place routes inside a switch in order of most specific to least and use exact path when needed
 ---------------------------
APP.JS 
Place routes.js in the App.js component like so:

import { Link } from 'react-router-dom' // if you place any Links in the component
import routes from './routes'
...
 return (
      <div>
       {routes}
      </div>

----------------------------------------------
INDEX.JS
In index.js do the following:
IMPORTANT: In this example, I use HashRouter, but BrowserRouter is used in the Node Middleware Shopping Cart excersize

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);



Links ---------------
Whenever a Link component is used, import { Link } from 'react-router-dom'
<Link to="/" className="btn btn-danger">Cancel</Link>
IMPORTANT: I don't think you use Link to execute any action creators or events. They simply redirect to a new url

-----------------------------------------------------------------------------------------------------
GOING LIVE WITH PRODUCTION SITE ON DIGITAL OCEAN


Once your app is hosted, use gitbash in codevs to update and run it with:
ssh root@your.ip.address // in my case it is ssh root@138.197.217.24 // his connects to your server. 
Then do git pull to bring in the latest github commits 
If you added new npm modules, run npm install before run build
Then npm run build // this creates the static version of the site 
node server/index.js // this starts up the server and it should be ready to view on the web

Setting up an app on digitalocean
Here are the steps https://github.com/DevMountain/Hosting-Digital-Ocean


SSH keys
I already created the keys. To see them, do the following:
Go to root folder in laptop by typing cd ~ in gitbash
ls -a 
Cd .ssh
Ls
To copy the keys, type:  code id_rsa for the private key and code id_rsa.pub for the public key

Once your app is hosted, open gitbash and type:
ssh root@your.ip.address // in my case it is ssh root@138.197.217.24 // his connects to your server. 
Then do git pull to bring in the latest github commits 
If you added new npm modules, run npm install before run build
Then npm run build // this creates the static version of the site 
node server/index.js // this starts up the server and it should be ready to view on the web



---------------------------------------------------------------------------------------------------------


------------------------------------------
EXTRAS
------------------------------------------

REDUX FORM ------------------------------------
npm install --save redux-form 
IMPORTANT: If you use a Redux form, you will need to use  { combineReducers } from 'redux' because you will have to combine the form's reducer with your other reducers. One strategy is to create an index reducer file where you combine the reducers, here's an example:
import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});
export default rootReducer;

In your reducer index import { reducer as formReducer } from 'redux-form'; // use an alias to prevent confusion of the word reducer. This descructures the Redux Form's reducer and assigns it to the name 'formReducer'.

IMPORTANT: YOU MUST USE THE Object property, 'form' TO ASSOCIATE THE formReducer - Redux Forms requires this.
In the Component where the form will appear:
import { Field, reduxForm } from 'redux-form';  // The reduxForm function is like a connect helper to help it work with the Redux Store to manage state.
At the bottom of the component we invoke reduxForm to do something similar to what connect does - wiring the component to the Redux state management. Note that we use the keyword 'form' as the key to the object so that Redux From knows what to do with this particular form. The form name assigend to 'form' must be unique so when you have multiple forms, Redux Form will know which is which. They all get assigned to the 'form' key and Redux Form will know how to manage them all. Here's the code:
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew)


----------------------------------------------------------------------
ANGULAR

3 Files: index.html, app.js,  controller.js

App
angular.module("myApp", []);

Controller
angular.module("myApp").controller("friendCtrl", function( $scope ) {

})

In the Index.html: add these:
<html ng-app="myApp">
<body ng-controller="friendCtrl">

right before end of body:
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
<script src="js/app.js"></script>
<script src="js/friendCtrl.js"></script>































































COMPONENTS FOLDER
Create a GenericReduxComponent.js  copy and paste skeleton's generic state action component into it to use for testing

On App.js add a button. onClick update path to /test  
In routes.js create Route to /test and component= GenericReduxComponent
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

App.js is going to be the primary compoent that provides the basic html structure of the home page and contains the {routes}, which holds ALL the routes used to determine what gets displayed in the main body of the App component.  IMPORTANT - I place index.js in the root and App.js in the Components folder because it's a goddamned component afterall.

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

-------------------Toast Instructions-------------------------------
npm install react-toastify   //if something isn't working try installing react-notify-toast 
import { ToastContainer, toast } from 'react-toastify'; --- import to any file that uses toast.
Place <ToastContainer /> component in the React Component's return statement, right after the first opening div.
call toast.success("Anything you want to say in the green success flag") or call
toast.error("Say something in the red flag"). Here's an example:
axios.get('http://joes-autos.herokuapp.com/api/vehicles').then( (results)=> {
    toast.success("Success");
    this.setState({vehiclesToDisplay: results.data});
  }).catch( ()=> toast.error('failed'));



//from Alan's front-to-back review
1. setup front end redux - imports, provider, reducer, action creator,, smart components
2. set up server with test data to do a quick test wtih  res.status(200).send(data)

SERVER 
dotenv 
create a SERVER_PORT=3001 variable

index
const express
const massive
const bodyparser
import dotenv.config
const { SERVER_PORT } = process.env
app = express()
start listening 
middlewares:
app use bodyparserapp
app use massive
app use sessionChecker - my middleware

create endpoints:
app.get('/api/todos', controllers/controller.js)

In Redux component
Do componentDidMount(){
    axios.get('endpoint').then( response =>
        console.log(response.data)
    )
}






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

---------------START SERVER IN TERMINAL -----------------------
--TIP!!!!!!!!!!! when you run nodemon use 'nodemon --watch server'  
-------- run nodemon to see if server says 'listening'-------------

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





SETUP //////////////////////////////
--------------------------------------NPM INSTALL---------------------------------------------------------
----------------------------------------------------------------------------------------------------
// NPM INSTALL --  ALL THE KEY FILES ---------------------------------------------------------
npm init -y  // This creates the package.json file
I'm going to list below all the npm packages I typically consider for full stack apps. Some are redundant. Look over them and use what you need for your project. 
run npm install --save express express-static express-session body-parser dotenv cors massive react-router-dom axios react-redux redux redux-promise redux-promise-middleware redux-form react-toastify hash-router browser-router underscore passport passport-auth0

On every js file that uses it, you must use let _ = require ('underscore');

SKELETON FOLDER TRANSFER /////////////
In Windows Explorer, open the skeleton and copy and paste the following folders into the root of your project: server, db, _SNIPPETS

In server folder, rename zample-index.js and update it for what you need. Go down the list and inspect what middleware you need to activate or comment out
NOTE: Keep controllers and endpoints commented out until after you start nodemon listening. Once nodemon successfully starts listening on port 3005, you can uncomment items to start testing connections to server and database. See the testing checklist below:

Create a .env file in your root. Copy and paste the skeleton code into it.
IMPORTANT: IN THE .ENV FILE USE YOUR OWN HEROKU DATABASE URI FOR CONNECTION_STRING
My uri is stored in google docs
Add .env to the .gitignore file


Check 3 places to make sure the server port matches:
package.json,
the server index
.env file

express.static is unclear to me. I need to confirm how it works.

BE SURE TO DO SEARCH FOR 'zample-' to find and change any names



If all went well, you created a table, added a product, and returned all the products in the databse. Now, we'll try to get the products via Postman by 1. hitting a server index endpoint, send request to controller, have the controller invoke the same SELECT * FROM test4 script. Here are the steps:
1. In the server index, uncomment or create an endpoint and take note of the controller it calls.
2. In the controller folder, update create or check to be sure the controller method name matches the controller name on the endpoint. Be sure .then console logs a message and returns the database data. It should look something like this:
getAll: (req,res,next) => {
        const dbInstance = req.app.get('db');

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



///// Need to create the REGISTER method, but too tired at the moment and need to get the sessions figured out

//////////////-----------SESSIONS-----------------//////////////////
IMPORTANT: Sessions is high-level middleware. This means you invoke it with app.use( checkForSession ); // checkForSession is our name. We're going to use this function to check if this http request has a cookie already and if not, give the fucker one.
1. Make sure you have a folder inside server folder called middlewares. Create or uncomment checkForSession.js file.
2. In the server index have to import the damn thing: const checkForSession = require('./middlewares/checkForSession');
3. This is high-level middleware, so be sure to call app.use( checkForSession ); in the server index file. So now, every single http request that hits the server is going to have to run through this function, which will check if the http request already has a cookie and if not, assign it a session cookie PLUS add the session.user object which contains all the shit we want to keep track of on this bastard.
////////////Need to figure out how to keep track of the things they want to save. Look at zample-cart-controller.js for ideas/////////////////////
