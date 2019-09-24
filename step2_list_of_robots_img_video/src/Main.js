import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as jsonSource from './sources/robots.json';

import LeftSide from './components/LeftSide/LeftSide';

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
        }; 
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
                <LeftSide robots={this.state.robot_list}/>
            </div>
            <div className="col-md-4 col-lg-4" >
            
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
