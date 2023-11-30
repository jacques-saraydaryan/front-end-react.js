import { configureStore } from '@reduxjs/toolkit';
import valueListReducer from './slices/valueListSlice';

export default configureStore({
  reducer: {
	valueListReducer: valueListReducer ,
    },
})
