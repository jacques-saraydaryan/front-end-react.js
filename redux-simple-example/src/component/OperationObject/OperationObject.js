import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addItem} from '../../actions';
import {removeItem} from '../../actions';


class OperationObject extends Component {
    constructor(props){
        super(props);
        this.state={
            value:'',
        }

        //bind local fonction to use this. in function
        this.handleChange=this.handleChange.bind(this);
        this.handleclick=this.handleclick.bind(this);
    }

    handleChange(ev){
        this.setState({value:ev.target.value});
    }

    handleclick(){
        //depending the type of action distance corresponding action
        switch (this.props.type) {
            case 'ADD':
                //call the store and dispatch the addItem action
                this.props.dispatch(addItem(this.state.value));
                return

            case 'REMOVE':
                //call the store and dispatch the removeItem action
                this.props.dispatch(removeItem(this.state.value));
                return

            default:
            this.props.dispatch(addItem(this.state.value));
                return
        }
    }

  render() {
    let display;
    //conditional rendering depending of the action type
    switch (this.props.type) {
        case 'ADD':
            display=(
             <div>
                <div className="form-group">
                    <label htmlFor="valueId">VALUE TO ADD</label>
                    <input type="email" className="form-control" id="valueId" aria-describedby="emailHelp" placeholder="Enter the value to Add" onChange={this.handleChange}></input>
                </div>
                <button className="btn btn-primary" onClick={this.handleclick}>ADD</button>
            </div>
            );
        break;


        case 'REMOVE':
            display=(
                <div>
                    <div className="form-group">
                        <label htmlFor="valueId">VALUE TO REMOVE</label>
                        <input type="email" className="form-control" id="valueId" aria-describedby="emailHelp" placeholder="Enter the value to Remove" onChange={this.handleChange}></input>
                    </div>
                    <button className="btn btn-secondary" onClick={this.handleclick}>Remove</button>
                </div>
            )
        break;
        }

    return ( display  );
  }
}

//connect current component to the store
// no need to map store value to local propos
export default connect()(OperationObject);