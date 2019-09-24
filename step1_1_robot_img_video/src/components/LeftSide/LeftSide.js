import React, { Component } from 'react';
import Robot from '../Robot/Robot';

class LeftSide extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        

    }
  
    
  //render function use to update the virtual dom
  render() {
      
    return (
            <div>
               <Robot
                    robot={this.props.robots}
                />
            </div>
    );
  }
}

//export the current classes in order to be used outside
export default LeftSide;
