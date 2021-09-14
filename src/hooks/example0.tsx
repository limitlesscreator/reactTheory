import React, {useMemo, useState} from 'react';

function generateData() {
    console.log('generateDataProblem')
    return 3284982732
}

//with problem generateData

export const Example0 = () => {
    console.log('Example0')
    const initValue = generateData()

    const [counter, setCounter] = useState(initValue)
    console.log(counter)

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </>
    );
};
