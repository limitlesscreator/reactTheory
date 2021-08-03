import React, {useState, useMemo, useEffect} from "react";

export function UseMemo() {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(true)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    },[number])

    const themeStyles = useMemo(() => {
        return {
            background : dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    },[dark])
    useEffect(() => {
        console.log("Theme Changed")
    },[themeStyles])
    //here is (above) we are checking that themeStyles is not reRendering with change number


    return (
        <>
            <input type="number" value={number} onChange={(e) => {setNumber(+e.currentTarget.value)}}/>
            <br/>
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num : number){
    console.log("Calling Slow Function")
    for (let i = 0; i <= 1000000000; i++){}
    return num * 2
}
