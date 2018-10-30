THIS IS FOR USING REACTBOILERPLATE TO START PROJECTS
https://www.reactboilerplate.com/
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs


1. QUICKSTART Clone the boilerplate and run setup and start. This will open the project in a mode that lets your test the boilerplate features. 
git clone https://github.com/react-boilerplate/react-boilerplate.git
npm run setup && npm start

2. START DEVELOPING When you're ready to start coding:
npm run clean
npm start 

3. DEPLOY
npm run build

STRUCTURE
The app/ directory contains your entire application code, including CSS, JavaScript, HTML and tests. The rest of the folders and files only exist to make your life easier, and should not need to be touched.


CSS
Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

See the CSS documentation for more information.

JS
We bundle all your clientside scripts and chunk them into several files using code splitting where possible. We then automatically optimize your code when building for production so you don't have to worry about that.

See the JS documentation for more information about the JavaScript side of things.

SEO
We use react-helmet for managing document head tags. Examples on how to write head tags can be found here.

Testing
For a thorough explanation of the testing procedure, see the testing documentation!

Browser testing
npm run start:tunnel makes your locally-running app globally available on the web via a temporary URL: great for testing on different devices, client demos, etc!

Unit testing
Unit tests live in test/ directories right next to the components being tested and are run with npm run test.


