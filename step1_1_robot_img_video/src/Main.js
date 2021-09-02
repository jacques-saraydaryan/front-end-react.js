import React, {useState} from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as jsonSource from './sources/robot.json';

import {LeftSide} from './components/LeftSide/LeftSide';

//const json = require('./sources/robots.json');
//Create a react component with props
export const Main= (props) =>{

 //Create a local state with as initial value a json object
   const [robot, setRobots] = useState(jsonSource.default);
// return JSX components
 return (
      <div className="container-fluid">
        <div className="row">
            <h1> Welcome to robot shop</h1>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4" >
                <LeftSide robots={robot}/>
            </div>
            <div className="col-md-4 col-lg-4" >
            
            </div>
            <div className="col-md-4 col-lg-4" >
            
            </div>
        </div>
      </div>
 );
  

}