// import React from "react";
// import ReactDOM from "react-dom";
//
// import {App} from "./App";
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

import {createStore} from "redux";

function reducer(state = [], action) {
    // console.log(action)
    switch (action.type) {
        case "ADD_TRACK":
            return [
                ...state,
                action.payload
            ]
    }
    return state
}

const store = createStore(reducer)

console.log(store.getState())

store.subscribe(() => {
    console.log('state changed', store.getState())
})

store.dispatch({type: "ADD_TRACK", payload: "Smells like spirit"})
store.dispatch({type: "ADD_TRACK", payload: "Enter Sandman"})