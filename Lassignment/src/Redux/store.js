import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Combinereducer from "../Redux/Reducer/Combinereducer.js";

const store = createStore(Combinereducer, applyMiddleware(thunk));

export default store;
