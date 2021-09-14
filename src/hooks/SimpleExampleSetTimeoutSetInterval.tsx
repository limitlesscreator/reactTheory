import React, {useEffect, useState} from 'react';

export const SimpleExampleSetTimeoutSetInterval = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            console.log('tick')
            console.log(counter) // always 1
            setCounter((state) => state + 1)
            // document.title = counter.toString()
        },1000)
    },[])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            {/*<button onClick={() => {setFake(fake + 1)}}>fake+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        </>
    );
};
