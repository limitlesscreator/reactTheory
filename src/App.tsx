import React, {} from "react";
import {Example1} from "./hooks/example1";
import {Example0} from "./hooks/example0";
import {Example1UseEffect} from "./hooks/example1-useEffect";
import {SimpleExampleSetTimeoutSetInterval} from "./hooks/SimpleExampleSetTimeoutSetInterval";
import {Clock1} from "./hooks/Clock1";
import {Head} from "./components/Head";


function App() {
    return (
        <div>
            <Head title='Clock'
                  isActive={true}
                  thing2={['hello', `it's array strings`]}
                  thing3={[1, 2]}
                  status={'loaded'}
                  thing4={{name: 'Lara', age: +`1`}}
                  func={() => {console.log('return nothing')}}
            />
            <Clock1/>
            {/*<Example0/>*/}
            {/*<Example1/>*/}
            {/*<Example1UseEffect/>*/}
            {/*<SimpleExampleSetTimeoutSetInterval/>*/}
        </div>
    )
}

export default App