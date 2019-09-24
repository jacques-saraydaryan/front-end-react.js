import React, { Component } from 'react';
import Panel from './containers/Panel';
import { connect } from 'react-redux';

class RightSide extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }
    
    
  //render function use to update the virtual dom
  render() {
      if(this.props.part.id ==undefined){
          return <div></div>;
      }
    
    return (
            <div>
                <Panel part={this.props.part}/>
            </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    part: state.partReducer
  }
};

export default connect(mapStateToProps)(RightSide);

