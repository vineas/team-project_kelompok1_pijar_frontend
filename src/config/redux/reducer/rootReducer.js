import { combineReducers } from "redux";

import userReducer from "./userReducer";
import recepeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  recepe: recepeReducer,
});

export default rootReducer;
