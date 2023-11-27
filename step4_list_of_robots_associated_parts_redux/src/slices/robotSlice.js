import { createSlice } from '@reduxjs/toolkit'

export const robotSlice = createSlice({
  name: 'Robot',
  // Define initial state of the reducer/slice
  initialState: {
    current_robot: {},
  },
  // Define the reducers 
  reducers: {
    update_selected_robot: (state, action) => {
        state.current_robot = action.payload
    },
}
})

// Action creators are generated for each case reducer function
export const { update_selected_robot} = robotSlice.actions

export default robotSlice.reducer