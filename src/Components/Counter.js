import React, { useContext } from 'react';
import { CounterContext } from '../ContextProviders';
import { counterActions } from '../Actions';


export default function Counter() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div>
            <h5>Count: {state.count}</h5>
            <button onClick={() => dispatch({ type: counterActions.INCREMENT })}> + </button>
            <button onClick={() => dispatch({ type: counterActions.DECREMENT })}> - </button>
            <button onClick={() => dispatch({ type: counterActions.SET_VAL, val: 10 })}> setVal </button>
        </div>
    );
}