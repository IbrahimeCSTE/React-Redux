import { combineReducers, createStore } from "redux";
import { reducer } from "./Reduce";

const init = {};
const red = combineReducers({
  reducer,
});

const store = createStore(red, init);
export default store;
