import React from 'react';
import {Rainbow} from "./HOC/Rainbow";

const About = ({text}) => {
    return (
        <div>
            <div>{text}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi fugiat inventore iste
                necessitatibus nulla ut. Commodi, consectetur dolor ea harum ipsam molestias non, numquam, quis saepe ut
                veniam veritatis?</p>
        </div>
    )
}
export default Rainbow(About)