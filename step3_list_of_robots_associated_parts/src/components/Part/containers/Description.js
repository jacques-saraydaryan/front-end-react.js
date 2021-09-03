import React from 'react';
import {Price} from './Price';

export const Description = (props)=>{

    return (
        <table class="table">
             <tr> 
                 <td> ID </td>
                 <td>{props.part.id}</td>
             </tr>
             <tr> 
                 <td> NAME </td>
                 <td>{props.part.title}</td>
             </tr>
             <tr> 
                 <td> PRICE</td>
                 <td><Price value={props.part.price} type="d" /></td>
             </tr>
         </table>
 );

}