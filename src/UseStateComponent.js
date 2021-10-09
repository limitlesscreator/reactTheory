import React, {useState} from 'react';

export const UseStateComponent = () => {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible((value) => !value)
    }

    return (
        <>
            <h1>What is React?</h1>
            <button onClick={handleClick}>Show</button>
            {visible && (
                <p>A JavaScript library for building user interface</p>
            )}
        </>
    );
}
