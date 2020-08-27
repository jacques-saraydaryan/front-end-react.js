import React, { Component } from 'react';
import {MyObject}  from '../MyObject/MyObject';
//useSelector to connect the current function to the store and get current state
import {useSelector } from "react-redux";

export const ObjectList = (props) => {
    //useSelector get current store state of valueListReducer and especially the valueList
    let array_value = useSelector(state => state.valueListReducer.valueList);
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

