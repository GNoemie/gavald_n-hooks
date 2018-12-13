import React from 'react';
import FavouriteToggle from './FavouriteToggle';
import { useState } from 'react';

function useCounter(initialState) {
    const [count, setCounter] = useState(initialState);

    const handlers = {
        increment: () => setCounter(count + 1),
        decrement: () => setCounter(count - 1)
    }

    return [count, handlers];
}

const ScoreCounter = () => {
    const [count, {increment, decrement}] = useCounter(0)

    return (
        <div>
            <div> {count} </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
};


export default ScoreCounter;