import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//extends the object Component
class App extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        //creation of an initial state, a json object
        this.state = {
            title:this.props.title,            
            mouse_over_num:0,
        };
        //binding of the function given the ability to use this
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleMouseOverTitle=this.handleMouseOverTitle.bind(this);
        
    }

 //function with the event as parameter
 handleChangeTitle(e){
     //call the set State function (from react component)
     // lead to update state object whith the given value
     // lead to re-render the current component
     this.setState({title:e.target.value});
 }
    
handleMouseOverTitle(){
    this.setState({mouse_over_num:this.state.mouse_over_num +1});
}

  //render function use to update the virtual dom
  render() {
    // return the react specific virtual dom
      
    //{...} are used to call javascript code
    //{this.handleChangeTitle} associate the currrent event to the given function
    //{this.state.title} call javascript and get the value of the title attribute of the current state
    return (
      <div className="App">
        <h1> this is my first React Component <span className="badge badge-primary">{this.state.mouse_over_num}</span> </h1>
        <label htmlFor="titleInput">Title </label>
            <input 
                type="text" 
                className="form-control" 
                id="titleInput" 
                onChange={this.handleChangeTitle} 
                value={this.state.title}
            />
        <div onMouseOver={this.handleMouseOverTitle} >
            <h3>{this.state.title}</h3>
        </div>
      </div>
    );
  }
}

//export the current classes in order to be used outside
export default App;
