import React from 'react';

export const List = (props) => {
    const {items = []} = [props]
    if (!items.length) return null

    return (
        <>
            {
                items.map(el => (
                    <li key={el}>{el}</li>
                ))
            }
        </>
    )
}
