import React, { Component } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {ObjectList} from './component/ObjectList/ObjectList'
import {OperationObject} from './component/OperationObject/OperationObject'
import './lib/css/bootstrap.min.css';

//import action to load the first time the list of values
import { load_items } from './slices/valueListSlice';

//create a store and associate reducers to it


export const App = (props) =>{
    //call the action loadItems to load inital items
    let list_items=['A','B','C','D','E','F'];
    const dispatch = useDispatch();                


    dispatch(load_items({itemList:list_items}));


    return (
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
    );
}

