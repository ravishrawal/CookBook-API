import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


//create reducer
const reducer = combineReducers({});

//allow the use of thunks
const middleware = applyMiddleware(thunk, logger);

//create the redux store
const store = createStore(reducer, middleware);
//access to store from browser
window.store = store;

export default store;

//export all functions to allow us to import everything from index
