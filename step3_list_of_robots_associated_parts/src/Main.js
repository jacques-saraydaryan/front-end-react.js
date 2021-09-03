import React, {useState} from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as jsonSource from './sources/robots_parts.json';

import {LeftSide} from './components/LeftSide/LeftSide';
import {MiddleSide} from './components/MiddleSide/MiddleSide';


export const Main =(props) =>{
    const [robots, setRobots] = useState(jsonSource.default);
    const [selectedRobotId, setSelectedRobotId] = useState(0);
    const [selectedParts, setSelectedParts] = useState([]);

    function handleOnRobotSelected(id){
        console.log("selected robot id:"+id);
        setSelectedRobotId(id);
        const current_robot_obj=getRobotFromId(id);
        setSelectedParts(current_robot_obj.parts);
        console.log(current_robot_obj.parts);
    }
        
        
    function getRobotFromId(id){
        for(var i=0;i<robots.robots.length;i++){
                if(robots.robots[i].id==id){
                    return robots.robots[i];
                }
            }
            return {};
    }


    return (
        <div className="container-fluid">
          <div className="row">
              <h1> Welcome to robot shop</h1>
          </div>
          <div className="row">
              <div className="col-md-4 col-lg-4" >
                  <LeftSide 
                      robots={robots}
                      handleOnRobotSelected={handleOnRobotSelected}
                  />
              </div>
              <div className="col-md-4 col-lg-4" >
                  <MiddleSide 
                      parts={selectedParts}
                      partlists={robots.parts}
                  />
              </div>
              <div className="col-md-4 col-lg-4" >
              
              </div>
          </div>
        </div>
      );
}