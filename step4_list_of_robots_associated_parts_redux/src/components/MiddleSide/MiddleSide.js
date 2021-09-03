import React from 'react';
import {Part} from '../Part/Part';
import { useSelector } from 'react-redux';
export const MiddleSide =(props)=>{
    let parts = useSelector(state => state.robotReducer.parts);


    function getPartObject(id){
        for(var i=0;i<props.partlists.length;i++){
            if(props.partlists[i].id==id){
                return props.partlists[i];
            }
        }
        return {};
    }
  
 function getAllPartRender(){
     let array_render=[];
     if (parts == undefined)
         return ;
     for(var i=0;i<parts.length;i++){
         let obj=getPartObject(parts[i]);
         array_render.push(
             <Part
                key={i}
                part={obj}
             />
             );
     }
     return array_render;
 }

 const display_list= getAllPartRender();
 return (
    <div>
       {display_list}
    </div>
);
}
