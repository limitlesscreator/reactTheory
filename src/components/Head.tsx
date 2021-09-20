import React from 'react';

type PropsType = {
    title: string
    isActive?: boolean
    thing2: string[]
    thing3: Array<number>
    status: 'loading' | 'loaded' //union type
    thing4: {
        name: string
        age: number
    }
    func: () => void
}

export const Head = ({title = "Default props))", isActive  }: PropsType) => {
    return (
        <>
            <h1>{title}</h1>
            {isActive && <h3>Active</h3>}
        </>
    );
};
