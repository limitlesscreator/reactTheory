import React, {} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./actions";
import About from "./AboutForHOC";

export function App() {
    // const counter = useSelector(state => state.counter)
    // const isLogged = useSelector(state => state.isLogged)
    // const dispatch = useDispatch()

    // training Higher Order Functions

    function sing(callback) {
        console.log('la la la la ')
        if (callback) {
            callback()
        }
    }

    function meow() {
        console.log('meow meow')
    }

    function setup() {
        sing(function () {
            console.log('meow meow')
        })
    }

// setup()

    function multiplier(factor) {
        return x => x * factor
    }

    let doubler = multiplier(2)
    let triple = multiplier(3)

    console.log(doubler(4))
    console.log(triple(3))

    const createAdder = addBy => number => number + addBy
    const add3 = createAdder(3)
    console.log(add3(5))

    return (
        <div>
            <About/>

            {/*<h1>Counter {counter}</h1>*/}
            {/*<button onClick={() => {dispatch(increment())}}>+</button>*/}
            {/*<button onClick={() => {dispatch(decrement())}}>-</button>*/}
            {/**/}
            {/*{isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}*/}
        </div>
    )
}
