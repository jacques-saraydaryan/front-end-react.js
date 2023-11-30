import React from 'react';
import {MyObjectVisual} from './content/MyObjectVisual';

export const MyObject = (props) => {
  return (
    <MyObjectVisual value={props.value}></MyObjectVisual>
);

}