import {loggedReducer} from "./isLogged";
import {counterReducer} from "./counter";
import {combineReducers} from "redux";

export const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer,
})