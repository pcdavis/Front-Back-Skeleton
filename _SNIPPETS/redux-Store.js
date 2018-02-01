// replace all generic references and check pathways
import {createStore} from 'redux';
import reducer from './ducks/generic';

let store = createStore(reducer);

export default store;