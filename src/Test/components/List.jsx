import React from 'react';

export const  List = (props) => {
    const {items = []} = props
    if (!items.length) return null

    return <ul className={'list'}>
            <div>Test</div>
            {
                props.items.map(el => (
                    <li key={el}>{el}</li>
                ))
            }
        </ul>
}
