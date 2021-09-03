import React from 'react';
import {Description} from './containers/Description';

export const Part=(props)=>{
    return (
        <div className="panel panel-default">
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