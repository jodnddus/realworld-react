import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';
import localStorageMiddleware from './middleware';

const store = createStore(reducer, applyMiddleware(localStorageMiddleware));

export default store;