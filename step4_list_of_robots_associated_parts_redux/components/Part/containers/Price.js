import React, { Component } from 'react';


class Price extends Component {
    constructor(props) {
        super(props);        
    }
  
     
  //render function use to update the virtual dom
  render() {

    return (
           <button className="btn btn-primary" type="button">
                Price <span className="badge">{this.props.value}</span>
            </button>
    );
  }
}

export default Price;