import { combineReducers } from 'redux';
import valueListReducer from './valueListReducer';

/*
reducer that can contains set of reducer, usefull when several reducers are used at a timeS
*/
const globalReducer = combineReducers({
    valueListReducer: valueListReducer
});
export default globalReducer;