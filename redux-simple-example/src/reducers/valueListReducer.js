/*
    Define a reducer that react on different action type such as 'ADD_ITEM', 'REMOVE_ITEM', 'LOAD_ITEMS'
    the reducer has only valueList as state value
*/
const valueListReducer= (state={valueList:[]},action) => {
        console.log(action);
        switch (action.type) {
            case 'ADD_ITEM':
                state.valueList.push(action.item);
                //copy list because state is immutable
                let newValueListA=JSON.parse(JSON.stringify(state.valueList));
            return {valueList:newValueListA};

            case 'REMOVE_ITEM':
                let newValueListR=[];

                //copy every thing except the value to remove
                for(let i=0; i<state.valueList.length;i++){
                        if(state.valueList[i]!=action.item){
                            newValueListR.push(state.valueList[i]);
                        }
                    }
            return {valueList:newValueListR};

            case 'LOAD_ITEMS':
            //return directly the list of the action that will besome the new state value
            return {valueList:action.itemList};

            default:
            return state;
        }
    }
    export default valueListReducer;