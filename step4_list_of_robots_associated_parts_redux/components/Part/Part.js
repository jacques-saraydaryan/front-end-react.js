import React, { Component } from 'react';
import Description from './containers/Description';
import Visual from './containers/Visual';
import { setSelectedPart } from '../../actions'
import { connect } from 'react-redux';


class Part extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
        this.handleOnPartSelected=this.handleOnPartSelected.bind(this);
    }
    
handleOnPartSelected(part_obj){
      this.props.dispatch(setSelectedPart(part_obj));   
}
   
     
  //render function use to update the virtual dom
  render() {

    return (
            <div className="panel panel-default" onClick={()=>this.handleOnPartSelected(this.props.part)}>
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

export default connect()(Part);