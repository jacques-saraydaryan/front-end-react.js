import React, { Component } from 'react';

export const Label =(props)=>{
  return (
    <div>
        <h1>{props.title}</h1>
        <h5>ID: {props.id} LABEL:{props.title}</h5>        
    </div>

);
}