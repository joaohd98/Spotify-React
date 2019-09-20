import {applyMiddleware, createStore} from "redux";
import {combinedReducers} from "./reducers";
import logger from 'redux-logger'
import thunk from "redux-thunk";

export default () => createStore(
  combinedReducers(),
  applyMiddleware(thunk, logger)
);
