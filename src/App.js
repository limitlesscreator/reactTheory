import React, {useState} from "react";
import {List} from "./Test/components/List";


const data = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Angular',
    'NodeJS',
]
function App() {
    return (
        <div className={'container'}>
            <List items={data}/>
        </div>
    )
}

export default App