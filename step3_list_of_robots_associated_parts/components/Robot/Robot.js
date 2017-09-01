import React, { Component } from 'react';
import Label from './containers/Label';
import Visual from './containers/Visual';

class Robot extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }
  
     
  //render function use to update the virtual dom
  render() {

    return (
            <div className="panel panel-default" onClick={()=>{this.props.handleOnRobotSelected(this.props.robot.id)}}>
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

export default Robot;