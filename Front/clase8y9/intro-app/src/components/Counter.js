import React from 'react';

function Counter({ increment, reset, resta, number }) {
    return (
        <div>
            <p>{number}</p>
            <button onClick={increment}>increment</button>
            <button onClick={resta}>resta</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Counter;
