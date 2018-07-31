import React from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import ReactDOM from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom";

import "./index.css";

import App from "./App";

import store from './store'
import { Provider } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux' //Notice react-redux, not redux. 

//Index is very commonly used for setup.  We don't do routes, or other actual code in here.  Just wire up pieces.

//Putting the provider here gives it top level access to the whole app so it can tell React to render when needed.
let topLevelComponentWithStore = ( 
    <Provider store={store}>
        <App />
    </Provider>)

ReactDOM.render(topLevelComponentWithStore, document.getElementById('root'));


// Below is example with Middleware /////////////////////////////////////////////

import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import ReactDOM from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom';
import { Provider } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux';
import { createStore, applyMiddleware } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import ReduxPromise from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

