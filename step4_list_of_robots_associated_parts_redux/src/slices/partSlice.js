import { createSlice } from '@reduxjs/toolkit'

export const partSlice = createSlice({
  name: 'Part',
  // Define initial state of the reducer/slice
  initialState: {
    current_part: {},
  },
  // Define the reducers 
  reducers: {
    update_selected_part: (state, action) => {
        state.current_part = action.payload
    },
}
})

// Action creators are generated for each case reducer function
export const { update_selected_part} = partSlice.actions

export default partSlice.reducer