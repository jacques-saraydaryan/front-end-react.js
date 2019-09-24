export const setSelectedRobot=(robot_obj)=>{
    return {
        type: 'UPDATE_SELECTED_ROBOT',
        obj:robot_obj
        
    };
}


export const setSelectedPart=(part_obj)=>{
    return {
        type: 'UPDATE_SELECTED_PART',
        obj:part_obj
    };
}