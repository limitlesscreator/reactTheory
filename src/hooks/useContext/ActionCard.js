import React, {useContext} from 'react';
import {Context} from "./Context";

export const ActionCard = ({number}) => {

    const value = useContext(Context)
    return (
        <>
            <div className="card m-2">
                <div className="card-body">
                    <p>Купите наши книги:</p>
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={() => {value.incrementTotal(number)}}
                    >
                        Купить {number > 1 ? `${number} книг` : `${number} книгу`}
                    </button>
                </div>
            </div>
        </>
    );
};
