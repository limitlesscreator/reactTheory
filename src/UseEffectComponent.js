import React, {useEffect, useState} from 'react';

function Timer({intervalValue}){
    const [value, setValue] = useState(0)

    useEffect(() => {
       const intervalID = setInterval(() => {
            setValue(value => value + 1)
        },intervalValue)

        return () => {
           clearInterval(intervalID)
        }
    },[intervalValue])

    return (
        <>
            <h1>Timer</h1>
            <h2>{value}</h2>
        </>
    )
}

export const UseEffectComponent = () => {
    const [intervalValue, setIntervalValue] = useState()

    const handleIntervalClick = (ms) => {
        setIntervalValue(ms)
    }
    return (
        <>
            <Timer intervalValue={intervalValue}></Timer>
            <button onClick={() => handleIntervalClick(100)}>100ms</button>
            <button onClick={() => handleIntervalClick(500)}>500ms</button>
            <button onClick={() => handleIntervalClick(1000)}>1s</button>
        </>
    );
};
