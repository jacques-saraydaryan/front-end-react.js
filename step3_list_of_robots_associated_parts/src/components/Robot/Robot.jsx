import React, { useState } from 'react';
import {Label} from './containers/Label';
import {Visual} from './containers/Visual';
export const Robot =(props) =>{
    return (
        <div className="panel panel-default" onClick={()=>{props.handleOnRobotSelected(props.robot.id)}}>
            <div className="panel-heading">
                <h3 className="panel-title">Robot {props.id} description</h3>
            </div>
            <div className="panel-body">
                <Label 
                    title={props.robot.title} 
                    id={props.robot.id} 
                />
                <Visual 
                    type={props.robot.visual_type} 
                    src={props.robot.visual_src} 
                />
            </div>
        </div>
        );

}
