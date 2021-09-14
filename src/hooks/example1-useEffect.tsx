import React, {useEffect, useState} from 'react';

export const Example1UseEffect = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    },[counter])
    return (
        <>
            Hello, {counter}
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
        </>
    );
};


