import React, {useState} from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

export const App=(props)=>{
  //Create local states
   const [title, setTitle] = useState(props.title);
   const [mouse_over_num, setMouseOverNum] = useState(0)

 //function with the event as parameter
 function handleChangeTitle(e){
     //call the set State function (from react component)
     // lead to update state object with the given value
     // lead to re-render the current component
      setTitle(e.target.value);
 }
    
 function handleMouseOverTitle(){
   setMouseOverNum(mouse_over_num +1);
}

return (
  <div className="App">
    <h1> this is my first React Component <span className="badge badge-primary">{mouse_over_num}</span> </h1>
    <label htmlFor="titleInput">Title </label>
        <input 
            type="text" 
            className="form-control" 
            id="titleInput" 
            onChange={handleChangeTitle} 
            value={title}
        />
    <div onMouseOver={handleMouseOverTitle} >
        <h3>{title}</h3>
    </div>
  </div>
);

}