import React from 'react';
import {About} from "../AboutForHOC";

const HOC = (WrappedComponent) => {
    let otherComponent = () => {
        return <WrappedComponent/>
    }
    return otherComponent
};
export default HOC(About)