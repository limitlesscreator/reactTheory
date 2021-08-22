import React, {} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment,decrement} from "./actions";

export function App() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Counter {counter}</h1>
            <button onClick={() => {dispatch(increment())}}>+</button>
            <button onClick={() => {dispatch(decrement())}}>-</button>

            {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
        </>
    )
}
