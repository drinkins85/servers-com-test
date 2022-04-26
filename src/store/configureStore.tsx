import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import request from '../middlewares/request';
import rootReducer from '../reducers';

export const store = createStore(rootReducer, compose(applyMiddleware(thunk, request)));
