import React, { Component } from 'react';
import {Robot} from '../Robot/Robot';
export const LeftSide = (props) =>{

    function getAllRobotRender(){
        let array_render=[];
        
        for(var i=0;i<props.robots.robots.length;i++){
            array_render.push(
                <Robot
                   key={i}
                   robot={props.robots.robots[i]}
                />
                );
        }
        return array_render;
    }

    const display_list= getAllRobotRender();

    return (
        <div>
           {display_list}
        </div>
);

}