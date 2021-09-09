import React from 'react';
import {putToTemplate} from "./HOC/putToTemplate";

const Comment = (props) => {
    return (
        <div>
            {props.text}
        </div>
    );
};

export default putToTemplate(Comment)