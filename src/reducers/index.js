import { combineReducers } from "redux";
import { demoReducer } from "../modules/demo/reducers/index";

export default combineReducers({
	demo: demoReducer
});
