import React, { Component } from 'react';
import Price from './Price';


class Description extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }
  
     
  //render function use to update the virtual dom
  render() {

    return (
           <table class="table">
                <tr> 
                    <td> ID </td>
                    <td>{this.props.part.id}</td>
                </tr>
                <tr> 
                    <td> NAME </td>
                    <td>{this.props.part.title}</td>
                </tr>
                <tr> 
                    <td> PRICE</td>
                    <td><Price value={this.props.part.price} type="d" /></td>
                </tr>
            </table>
    );
  }
}

export default Description;