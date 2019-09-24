const partReducer= (state={},action) => {
    switch (action.type) {
        case 'UPDATE_SELECTED_PART':
            return action.obj;
    default:
      return state;
    }
}

export default partReducer;