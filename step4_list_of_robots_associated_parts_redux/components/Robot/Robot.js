import React, { Component } from 'react';
import Label from './containers/Label';
import Visual from './containers/Visual';
import { connect } from 'react-redux';

import {setSelectedRobot} from '../../actions';

class Robot extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.handleOnRobotSelected=this.handleOnRobotSelected.bind(this);
    }
    
handleOnRobotSelected(robot_obj){
    this.props.dispatch(setSelectedRobot(robot_obj));   
}
  
 
    
     
  //render function use to update the virtual dom
  render() {

    return (
            <div className="panel panel-default" onClick={()=>{this.handleOnRobotSelected(this.props.robot)}}>
                <div className="panel-heading">
                    <h3 className="panel-title">Robot {this.props.id} description</h3>
                </div>
                <div className="panel-body">
                    <Label 
                        title={this.props.robot.title} 
                        id={this.props.robot.id} 
                    />
                    <Visual 
                        type={this.props.robot.visual_type} 
                        src={this.props.robot.visual_src} 
                    />
                </div>
            </div>
    );
  }
}


export default connect()(Robot);

//export default Robot;