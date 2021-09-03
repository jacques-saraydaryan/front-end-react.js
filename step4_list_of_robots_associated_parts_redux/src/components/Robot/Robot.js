import React, { useState } from 'react';
import {Label} from './containers/Label';
import {Visual} from './containers/Visual';
import {setSelectedRobot} from '../../actions';
import { useDispatch } from 'react-redux';

export const Robot =(props) =>{
    // Connect to the store
    const dispatch = useDispatch();

    function handleOnRobotSelected(robot_obj){
        dispatch(setSelectedRobot(robot_obj));   
    }
    return (
        <div className="panel panel-default" onClick={() => handleOnRobotSelected(props.robot)}>
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