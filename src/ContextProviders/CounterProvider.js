import React, { useReducer } from 'react'
import { handleCountReducer } from '../Reducers';
import { initialState, CounterContext } from './CounterContext.js';


export const CounterProvider = (props) => {
    const [state, dispatch] = useReducer(handleCountReducer, initialState);

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {props.children}
        </CounterContext.Provider>
    );
}