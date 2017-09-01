import { combineReducers } from 'redux';
import robotReducer from './robotReducer';
import partReducer from './partReducer';

const globalReducer = combineReducers({
  robotReducer: robotReducer,
  partReducer: partReducer
});

export default globalReducer;