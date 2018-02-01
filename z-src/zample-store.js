//This example uses applyMiddleware and promiseMiddleware from redux, which we haven't covered yet. I have commented out these lines and used only the redux components currently familiar with
// import { createStore, applyMiddleware } from "redux";
// import promiseMiddleware from 'redux-promise-middleware';
import { createStore } from "redux";
import reducer from './ducks/zample-reducer'; //zample reducer used

let store=createStore(reducer);// invoking createStore with reducer gives the store access to all the reducer action abilities
export default store;

//The export line below is based on using middleware, which I'm not using in this example
// export default createStore( reducer, applyMiddleware( promiseMiddleware() ) );