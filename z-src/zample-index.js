//Basic front-end setup that includes Bootstrap css, React, Redux - store and reducer inside ducks folder , Routing with routes.js 
//run npm install --save react-router-dom axios
//place a link to a cnd version of a bootstrap stylesheet in index.html here's where to get the link: https://getbootstrap.com/docs/3.3/getting-started/

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

registerServiceWorker();
