import React, { useReducer } from 'react'
import { handleCount } from '../Actions';
import { initialState, CounterContext } from './CounterContext.js';


export const CounterProvider = (props) => {
    const [state, dispatch] = useReducer(handleCount, initialState);

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {props.children}
        </CounterContext.Provider>
    );
}