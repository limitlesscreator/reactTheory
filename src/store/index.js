import {cashReducer} from "./cashReducer";
import {createStore, combineReducers} from "redux";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
     cash: cashReducer,
     customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
