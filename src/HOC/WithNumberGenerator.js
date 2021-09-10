import React from 'react';

export const WithNumberGenerator = WrapperComponent => props => {
    return (
        <div style={{color: 'red', fontSize: '40px'}}>
            <WrapperComponent {...props}/>
        </div>
    )
}