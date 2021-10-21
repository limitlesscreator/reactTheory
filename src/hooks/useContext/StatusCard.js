import React from 'react';
import {ActionCard} from "./ActionCard";


export const StatusCard = ({incrementTotal}) => {
    return (
        <>
            <div className="card">
                <div className="d-flex flex-row justify-content-center">
                    <ActionCard number={1} incrementTotal={incrementTotal}/>
                    <ActionCard number={3} incrementTotal={incrementTotal}/>
                    <ActionCard number={5} incrementTotal={incrementTotal}/>
                    <ActionCard number={20} incrementTotal={incrementTotal}/>
                </div>
            </div>
        </>
    );
};
