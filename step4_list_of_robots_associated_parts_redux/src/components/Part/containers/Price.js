import React  from 'react';

export const Price=(props)=>{
  return (
    <button className="btn btn-primary" type="button">
         Price <span className="badge">{props.value}</span>
     </button>
);
}