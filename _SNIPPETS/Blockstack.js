// The Blockstack Javascript library https://blockstack.github.io/blockstack.js/  is all a developer needs to create a DApp.It grants the application the ability to authenticate a Blockstack identity and to read and write to the user’s data stored in a Gaia hub.

//The main idea is that React handles all the UI and interaction while Blockstack.js handles the authentication and Gaia blockchane storage.

//Authentication. Clicking on the sign in button does this - Clicking the button ends up calling the redirectToSignIn() method which generates an authentication request and redirects the user to the Blockstack browser to approve the sign in request. The actual Blockstack sign-in dialog depends on whether the user already has an existing session in the Blockstack Browser.

// Signing in with an identity is the means by which the user grants the DApp access.Access means the DApp can read the user profile and read / write user data for the DApp.Data is encrypted at a unique URL on a Gaia storage hub.

//In a web browser, UserSession default behavior is to store session data in the browser’s local storage. This means that app developers can leave management of session state to users. Once a user authenticates, the application can get and put application data in the user’s Gaia storage.

// Deploying CORS error:  Need to add headers and redirects to the build folder or you get a CORS error https://docs.blockstack.org/develop/zero_to_dapp_3.html
//cp cors/_headers build
// cp cors / _redirects build
// after items are copied into build folder - save and drag the build folder onto netlify deployments page

