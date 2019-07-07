import React, { useContext } from 'react';
import { CounterContext } from './Context.js';


export default function Counter() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div>
            <h5>Count: {state.count}</h5>
            <button onClick={() => dispatch({ type: "increment" })}> + </button>
            <button onClick={() => dispatch({ type: "decrement" })}> - </button>
            <button onClick={() => dispatch({ type: "setVal", val: 10 })}> setVal </button>
        </div>
    );
}