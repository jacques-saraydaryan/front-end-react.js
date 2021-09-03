import React from 'react';
import {Part} from '../Part/Part';
export const MiddleSide =(props)=>{
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
     if (props.parts == undefined)
         return ;
     for(var i=0;i<props.parts.length;i++){
         let obj=getPartObject(props.parts[i]);
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