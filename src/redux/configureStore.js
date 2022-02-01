import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const combinedReducers = combineReducers({
  rocketsReducer,
});

const middlewares = [logger, thunk];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;
