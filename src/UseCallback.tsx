import React, {useCallback, useState} from "react";
import {List} from "./List";



export function UseCallback() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)



    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    },[number])

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF  " : "#333"
    }

    return (
        <>
            <div style={theme}>
                <input
                    type="number"
                    value={number}
                    onChange={e => setNumber(+e.currentTarget.value)}
                />
                <br/>
                <button onClick={() => setDark(prevDark => !prevDark)}>Toggle theme</button>
                <List getItems={getItems}/>
            </div>
        </>
    )
}
