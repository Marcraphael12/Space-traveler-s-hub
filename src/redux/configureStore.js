import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const combinedReducers = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const middlewares = [logger, thunk];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;