import React, {useState} from "react";

export function UseState() {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState("blue")

    function decrementCount() {
        // setCount(count - 1)
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        // setCount(count +  1)
        setCount(prevCount => prevCount + 1)
        setTheme("red")
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}
