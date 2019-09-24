import React, { Component } from 'react';
import Part from '../Part/Part';
import { connect } from 'react-redux';

class MiddleSide extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state = {};
        this.getAllPartRender=this.getAllPartRender.bind(this);
        this.getPartObject=this.getPartObject.bind(this);
    }
    
    getPartObject(id){
        for(var i=0;i<this.props.partlists.length;i++){
            if(this.props.partlists[i].id==id){
                return this.props.partlists[i];
            }
        }
        return {};
    }
  
 getAllPartRender(){
     let array_render=[];
     if (this.props.parts == undefined)
         return ;
     for(var i=0;i<this.props.parts.length;i++){
         let obj=this.getPartObject(this.props.parts[i]);
         array_render.push(
             <Part
                key={i}
                part={obj}
             />
             );
     }
     return array_render;
 }
    
  //render function use to update the virtual dom
  render() {
      const display_list= this.getAllPartRender();
    return (
            <div>
               {display_list}
            </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.robotReducer.parts
  }
};

export default connect(mapStateToProps)(MiddleSide);

//export the current classes in order to be used outside
//export default MiddleSide;
