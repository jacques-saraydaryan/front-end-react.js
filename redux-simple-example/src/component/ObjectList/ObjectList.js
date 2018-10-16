import React, { Component } from 'react';
import MyObject from '../MyObject/MyObject';
//import needed to connect current component to the store
import { connect } from 'react-redux';


class ObjectList extends Component {
    constructor(props){
        super(props);
    }

  render() {
      let array_value=this.props.objectList;
      let key_indice=0;
    return (
        <div className="App">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>

        { array_value.map(item =>
            <tr key={key_indice++}>
                <th scope="row"></th>
                <td><MyObject value={item} ></MyObject></td>
            </tr>
        )}

                </tbody>
            </table>
        </div>
    );
  }
}

//link data from the store to local props
const mapStateToProps = (state, ownProps) => {
    return {
        objectList: state.valueListReducer.valueList
    } };

export default connect(mapStateToProps)(ObjectList);