import React from 'react';
import {Panel} from './containers/Panel';
import { useSelector } from 'react-redux';


export const RightSide=(props)=>{
  let part = useSelector(state=> state.partReducer);

  if(part.id == undefined){
    return <div></div>;
  }

  return (
      <div>
          <Panel part={part}/>
      </div>
  );
}