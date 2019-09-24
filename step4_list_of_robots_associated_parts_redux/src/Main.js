import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as jsonSource from './sources/robots_parts.json';

import LeftSide from './components/LeftSide/LeftSide';
import MiddleSide from './components/MiddleSide/MiddleSide';
import RightSide from './components/RightSide/RightSide';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from './reducers';

const store = createStore(globalReducer);

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
    }

    
  //render function use to update the virtual dom
  render() {
    
    return (
    <Provider store={store} >
      <div className="container-fluid">
        <div className="row">
            <h1> Welcome to robot shop</h1>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4" >
                <LeftSide 
                    robots={this.state.robot_list}
                />
            </div>
            <div className="col-md-4 col-lg-4" >
                <MiddleSide 
                    partlists={this.state.robot_list.parts}
                />
            </div>
            <div className="col-md-4 col-lg-4" >
                <RightSide  />
            </div>
        </div>
      </div>
    </Provider>
    );
  }
}

//export the current classes in order to be used outside
export default Main;
