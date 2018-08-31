import { applyMiddleware, compose, createStore } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import { reducer } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (state = {}) =>
  createStore(reducer, state, composeEnhancers(applyMiddleware(apiMiddleware)));