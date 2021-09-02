import React, { Component } from 'react';
import {Robot} from '../Robot/Robot';

//const json = require('./sources/robots.json');
//Create a react component with props
export const LeftSide= (props) =>{
return(
            <div>
               <Robot
                    robot={props.robots}
                />
            </div>
      );
}
