import React from 'react';

export const Search = (props) => {

    const {value,
        onChange,
        children = 'Search',
        placeholder = 'search...'
    } = props

    return (
        <>
            {children}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
};
