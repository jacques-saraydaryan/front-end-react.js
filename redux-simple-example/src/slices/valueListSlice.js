import { createSlice } from '@reduxjs/toolkit'

export const valueListSlice = createSlice({
  name: 'ValueList',
  // Define initial state of the reducer/slice
  initialState: {
    valueList: [],
  },
  // Define the reducers 
  reducers: {
    add_item: (state, action) => {
        state.valueList = [...state.valueList, action.payload.item]
    },
    remove_item: (state, action) => {
        let newValueListR=[];

        //copy every thing except the value to remove
        for(let i=0; i<state.valueList.length;i++){
                if(state.valueList[i]!=action.payload.item){
                    newValueListR.push(state.valueList[i]);
                }
            }
      state.valueList = newValueListR;
    },
    load_items: (state, action) => {
        state.valueList = action.payload.itemList;
  },
}
})

// Action creators are generated for each case reducer function
export const { add_item, remove_item, load_items } = valueListSlice.actions

export default valueListSlice.reducer