import React from 'react';
import { useDispatch } from 'react-redux';
import {Description} from './containers/Description';

import { setSelectedPart } from '../../actions'


export const Part=(props)=>{
    const dispatch=useDispatch();

    function handleOnPartSelected(part_obj){
       dispatch(setSelectedPart(part_obj));   
    }

    return (
        <div className="panel panel-default" onClick={()=>handleOnPartSelected(props.part)}>
            <div className="panel-heading">
                <h3 className="panel-title">Part {props.part.id} description</h3>
            </div>
            <div className="panel-body">
                <Description 
                    part={props.part} 
                />
            </div>
        </div>
);
}