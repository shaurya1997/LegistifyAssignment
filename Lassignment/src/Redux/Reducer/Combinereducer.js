import { combineReducers } from "redux";
import FirmReducer from "./FirmReducer.js";

export default combineReducers({
  firm: FirmReducer,
});
