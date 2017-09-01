import React, { Component } from 'react';
import Robot from '../Robot/Robot';

class LeftSide extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
        this.getAllRobotRender=this.getAllRobotRender.bind(this);
    }
  
 getAllRobotRender(){
     let array_render=[];
     
     for(var i=0;i<this.props.robots.robots.length;i++){
         
         array_render.push(
             <Robot
                key={i}
                robot={this.props.robots.robots[i]}
                handleOnRobotSelected={this.props.handleOnRobotSelected}
             />
             );
     }
     return array_render;
 }
    
  //render function use to update the virtual dom
  render() {
      const display_list= this.getAllRobotRender();
    return (
            <div>
               {display_list}
            </div>
    );
  }
}

//export the current classes in order to be used outside
export default LeftSide;
