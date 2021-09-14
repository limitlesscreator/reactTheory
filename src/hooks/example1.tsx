import React, {useMemo, useState} from 'react';

function generateData() {
    console.log('generateData')
    return 3284982732
}

export const Example1 = () => {
    console.log('Example1')
    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    console.log(counter)

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </>
    );
};
