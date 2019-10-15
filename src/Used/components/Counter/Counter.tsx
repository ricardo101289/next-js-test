import React from 'react'
import useCounter from './CounterContainer';

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter();
    return (
        <div>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
};

export default Counter;
