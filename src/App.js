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


function App() {
    const [total, setTotal] = useState(0)

    function incrementTotal(num) {
        setTotal(total + num)
    }

    let value = {
        incrementTotal
    }
    return (
        <div className={'container'}>
            {/*//     <div className="card m-2">*/}
            {/*//         <div className="card-footer">*/}
            {/*//             <h3 className="card-title">Итого</h3>*/}
            {/*//         </div>*/}
            {/*//         <div className="card-body">*/}
            {/*//             <p>Всего куплено {total} книг.</p>*/}
            {/*//         </div>*/}
            {/*//     </div>*/}
            {/*//     <Context.Provider value={value}>*/}
            {/*//         <StatusCard />*/}
            {/*//     </Context.Provider>*/}
            <CounterReducer initialCount={0}/>
        </div>
    )
}

export default App