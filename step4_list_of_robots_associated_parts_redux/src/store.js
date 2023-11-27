import { configureStore } from '@reduxjs/toolkit';
import robotReducer from './slices/robotSlice';
import partReducer from './slices/partSlice';

export default configureStore({
  reducer: {
	robotReducer: robotReducer ,
    partReducer: partReducer ,
    },
})
