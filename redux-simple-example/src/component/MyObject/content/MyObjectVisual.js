import React, { Component } from 'react';


class MyObjectVisual extends Component {
    constructor(props){
        super(props);

    }


  render() {
    return (
        <h2>{this.props.value}</h2>
        );
  }
}

export default MyObjectVisual;