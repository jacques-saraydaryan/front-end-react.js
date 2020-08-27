import React, { Component } from 'react';
import {ObjectList} from './component/ObjectList/ObjectList'
import {OperationObject} from './component/OperationObject/OperationObject'
import './lib/css/bootstrap.min.css';

//import needed to use redux with react.js
import { createStore } from 'redux';
import myReducers from './reducers'
import { Provider } from 'react-redux';

//import action to load the first time the list of values
import {loadItems} from './actions'

//create a store and associate reducers to it
const store = createStore(myReducers);

class App extends Component {
  constructor(props){
    super(props);

    //call the action loadItems to load inital items
    let list_items=['A','B','C','D','E','F'];
    store.dispatch(loadItems(list_items));
  }
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <div className="row">
                <div className="col-6">
                    <ObjectList ></ObjectList>
                </div>
                <div className="col-6">
                    <div className="col-12">
                    <OperationObject type="ADD"></OperationObject>
                    </div>
                    <div className="col-12">
                    <OperationObject type="REMOVE"></OperationObject>
                  </div>
                
                </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
