const robotReducer= (state={},action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_SELECTED_ROBOT':
            return action.obj;
    default:
      return state;
    }
}

export default robotReducer;