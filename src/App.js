import React, {useState} from "react";
import {Example1} from "./hooks/example1";
import {Example0} from "./hooks/example0";
import {Example1UseEffect} from "./hooks/example1-useEffect";
import {SimpleExampleSetTimeoutSetInterval} from "./hooks/SimpleExampleSetTimeoutSetInterval";
import {Clock1} from "./hooks/Clock1";
import {Head} from "./components/Head";
import {UseStateComponent} from "./UseStateComponent";
import {UseEffectComponent} from "./UseEffectComponent";
import {StatusCard} from "./hooks/useContext/StatusCard";
import {ActionCard} from "./hooks/useContext/ActionCard";
import {Context} from "../src/hooks/useContext/Context";
import {CounterReducer} from "./hooks/useReducer/CounterReducer";
import {List} from "./Test/components/List";


const data = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Angular',
    'NodeJS',
]
function App() {
    return (
        <div className={'container'}>
            <List items={data}/>
        </div>
    )
}

export default App