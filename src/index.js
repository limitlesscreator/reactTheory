import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import App from "./App";

const defaultState = {
    cash: 0
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload}
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}

const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

