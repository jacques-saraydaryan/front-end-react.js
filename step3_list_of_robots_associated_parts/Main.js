import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as jsonSource from './sources/robots_parts.json';

import LeftSide from './components/LeftSide/LeftSide';
import MiddleSide from './components/MiddleSide/MiddleSide';

//const json = require('./sources/robots.json');
//extends the object Component
class Main extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        let temp_robot_list;
        
        temp_robot_list=jsonSource;
        console.log(temp_robot_list);
        
        
        //creation of an initial state, a json object
        this.state = {
            robot_list:temp_robot_list,
            selected_robot_id:0,
            selected_parts:[],
        }; 
        this.handleOnRobotSelected=this.handleOnRobotSelected.bind(this);
        this.getRobotFromId=this.getRobotFromId.bind(this);
    }
    
handleOnRobotSelected(id){
    console.log("selected robot id:"+id);
    this.setState({selected_robot_id:id});
    const current_robot_obj=this.getRobotFromId(id);
    this.setState( {selected_parts:current_robot_obj.parts});
    console.log(current_robot_obj.parts);
}
    
    
getRobotFromId(id){
    for(var i=0;i<this.state.robot_list.robots.length;i++){
            if(this.state.robot_list.robots[i].id==id){
                return this.state.robot_list.robots[i];
            }
        }
        return {};
}

    
  //render function use to update the virtual dom
  render() {
    
    return (
      <div className="container-fluid">
        <div className="row">
            <h1> Welcome to robot shop</h1>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4" >
                <LeftSide 
                    robots={this.state.robot_list}
                    handleOnRobotSelected={this.handleOnRobotSelected}
                />
            </div>
            <div className="col-md-4 col-lg-4" >
                <MiddleSide 
                    parts={this.state.selected_parts}
                    partlists={this.state.robot_list.parts}
                />
            </div>
            <div className="col-md-4 col-lg-4" >
            
            </div>
        </div>
      </div>
    );
  }
}

//export the current classes in order to be used outside
export default Main;
