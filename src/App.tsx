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


function App() {
    const [total,setTotal] = useState(0)
    function incrementTotal(num: number){
        setTotal(total + num)
    }
    return (
        <div className={'container'}>
            <div className="card m-2">
                <div className="card-footer">
                    <h3 className="card-title">Итого</h3>
                </div>
                <div className="card-body">
                    <p>Всего куплено {total} книг.</p>
                </div>
            </div>
            <StatusCard incrementTotal={incrementTotal}/>
        </div>
    )
}

export default App