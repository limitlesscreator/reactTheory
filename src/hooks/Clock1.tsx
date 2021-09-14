import React, {useEffect, useState} from 'react';

export const Clock1 = () => {
    const [clock, setClock] = useState([0,0,0])

    function getTime(...time: any){
            setClock([time[0],time[1],time[2]])
    }

    console.log(clock)
    useEffect(() => {
        setInterval(() => {
            getTime([new Date().getHours(),new Date().getMinutes(),new Date().getSeconds()])
        },1000)
    },[])

    return (
        <>
            <div>{clock[0]}:{clock[1]}:{clock[2]}</div>
        </>
    );
};
