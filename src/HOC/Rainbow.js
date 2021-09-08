import React from 'react';

const Rainbow = (WrapperComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']
    const randomColour = colours[Math.floor(Math.random() * 100 * colours.length - 1)]
    const className = randomColour + '-text'
    console.log(randomColour)
    return (props) => {
        return (
            <div className={className}>
                <WrapperComponent {...props}/>
            </div>
        )
    }
};
export default Rainbow