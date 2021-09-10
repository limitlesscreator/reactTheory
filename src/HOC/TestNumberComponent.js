import React from 'react';
import {WithNumberGenerator} from "./WithNumberGenerator";

const TestNumberComponent = ({text}) => {
    return (
        <div>
            {text} {Math.ceil(Math.random() * 10)}
        </div>
    );
};

export default WithNumberGenerator(TestNumberComponent)