import { decrement } from './decrement.js';
import { increment } from './increment.js';


export const handleCount = (state, action) => {
    switch (action.type) {
        case "setVal":
            return { ...state, count: action.val };
        case "increment":
            return { ...state, count: increment(state.count, 1) };
        case "decrement":
            return { ...state, count: decrement(state.count, 1) };
        default:
            return;
    }
};