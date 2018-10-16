import React, { Component } from 'react';
import MyObjectVisual from './content/MyObjectVisual';

class MyObject extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
        <MyObjectVisual value={this.props.value}></MyObjectVisual>
    );
  }
}

export default MyObject;