import React, { Component } from 'react';
import Description from './containers/Description';
import Visual from './containers/Visual';


class Part extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }
  
     
  //render function use to update the virtual dom
  render() {

    return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Part {this.props.part.id} description</h3>
                </div>
                <div className="panel-body">
                    <Description 
                        part={this.props.part} 
                    />
                </div>
            </div>
    );
  }
}

export default Part;