import React, {} from "react";


type TypeProps = {
    title: string,
    test?: number,
}

const Title = ({title,test = 5}:TypeProps) => <h1>{title} there, there is {test} people on our meeting</h1>

function App() {
    return (
        <div>
            <Title title={'Hello'}/>
        </div>
    )
}

export default App