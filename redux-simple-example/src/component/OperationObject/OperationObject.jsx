import React, { useState  } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { add_item, remove_item } from '../../slices/valueListSlice';


export const OperationObject = (props) =>{

    const default_msg="Please enter a letter"
    const [content, setContent] = useState("");
    const [data, setData] = useState("");
    const dispatch = useDispatch();

    function handleChange(ev){
        const current_value=ev.target.value
        setData(current_value);
        if( ! /^([a-zA-Z]+)$/.test(current_value) ){
            setContent(" input need to be in [a-zA-Z]")
            console.log(content)
        }else{
            setContent("")
        }
    }

    function handleclick(){
        //depending the type of action distance corresponding action
        switch (props.type) {
            case 'ADD':
                //call the store and dispatch the addItem action
                dispatch(add_item({item:data}));
                return

            case 'REMOVE':
                //call the store and dispatch the removeItem action
                dispatch(remove_item({item:data}));
                return

            default:
                dispatch(add_item({item:data}));
                return
        }
    }

    let display;
    //conditional rendering depending of the action type
    switch (props.type) {
        case 'ADD':
            display=(
             <div>
                <div className="form-group">
                    <label htmlFor="valueId">VALUE TO ADD</label>
                    <label htmlFor="valueId">{content}</label>
                    <input type="email" className="form-control" id="valueId" aria-describedby="txtHelp" placeholder="Enter the value to Add" onChange={handleChange}></input>
                </div>
                <button className="btn btn-primary" onClick={handleclick}>ADD</button>
            </div>
            );
        break;

        case 'REMOVE':
            display=(
                <div>
                    <div className="form-group">
                        <label htmlFor="valueId">VALUE TO REMOVE</label>
                        <label htmlFor="valueId">{content}</label>
                        <input type="email" className="form-control" id="valueId" aria-describedby="emailHelp" placeholder="Enter the value to Remove" onChange={handleChange}></input>
                    </div>
                    <button className="btn btn-secondary" onClick={handleclick}>Remove</button>
                </div>
            )
        break;
        }

    return ( display  );
}