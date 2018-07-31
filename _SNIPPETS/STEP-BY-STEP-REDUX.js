// 1. create-react-app 
// 2. CD into the new folder  
// 3. npm install --save redux react-redux
// 4. Create the following folders:
//     src/reducers
//     src/components 
//     src/Redux_Components
// 5. Move App.js and App.css into components and update index with path to App.
// 6. Create the following files:
//     reducers/reducer.js
//     src/store.js
// 7. Build the start of the reducer.js
// 8. Open store.js and build it with the imported reducer 
// 9. In the index.js file, impmort the store and then wrop the App in the <Provider store={store}> 


// IMPORTANT CONCEPT:  Never mutate existing state - always completely replace it with a new state 

// Redux-Middleware
// npm install --save redux-promise
// In src/index.js (where Provider is located) Set it up like this:
// Note: this setup is from Udemy course, where he used separate folders for reducers and actions. In the reducer folder he combined all individual reducer files into an index.js that combined all the reducers into one using {combineReducers} from 'redux'. Look below for the code from how he did it.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers'; //this is the folder. redux will use the index.js file if no specific file is placed in this path

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

  //Here's the reducer folder's index.js file from Udemy course that combined multiple reducers into one index.js reducer
  import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;

//Below is an example of one of the individual reducer files titled weather_reducer.js
import { FETCH_WEATHER } from "../actions/index";


export default function( state = [] , action ) {
  switch(action.type){
      case FETCH_WEATHER:
        return [action.payload.data, ...state] // adds the new city object data onto front of new array with old state at end of array
  }
   return state;
}

//Below is an example of the action folder's index.js file where he placed all the action creators
import axios from 'axios'

const API_KEY = 'b38d14846f8263395788163abcde48e9';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Action Index exports the CONST and function to individual reducer files that import them. Below, you see the CONST and fetchWeather function which the reducer_weather.js imports and uses to update state, which it inturn exports to the reducer folder's index file where all the reducer states are merged with {combineReducers} from 'redux' into a rootReducer.
//NOTE: the const request is a PROMISE. It doesn't contain data.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
