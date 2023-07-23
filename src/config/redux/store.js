import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";
const { default: logger } = require("redux-logger");
const { default: thunk } = require("redux-thunk");

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
