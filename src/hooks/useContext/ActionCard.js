import React from 'react';

export const ActionCard = ({number,incrementTotal}) => {
    return (
        <>
            <div className="card m-2">
                <div className="card-body">
                    <p>Купите наши книги:</p>
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={() => {incrementTotal(number)}}
                    >
                        Купить {number > 1 ? `${number} книг` : `${number} книгу`}
                    </button>
                </div>
            </div>
        </>
    );
};
