import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return {count: state.count + 1}
        }
        case 'decrement': {
            return {count: state.count - 1}
        }
        case 'reset': {
            return {count: action.payload}
        }
        default: {
            return state
        }
    }
}

export const CounterReducer = ({initialCount}) => {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount
    })

    function increment() {
        dispatch({
            type: 'increment'
        })
    }

    function decrement() {
        dispatch({
            type: 'decrement'
        })
    }

    function reset() {
        dispatch({
            type: 'reset',
            payload: initialCount
        })
    }


    return (
        <>
            <div>count: {state.count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </>
    );
};
