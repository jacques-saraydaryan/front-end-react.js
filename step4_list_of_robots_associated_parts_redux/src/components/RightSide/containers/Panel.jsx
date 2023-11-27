import React from 'react';
import {Visual} from '../../Robot/containers/Visual'
import {Price} from '../../Part/containers/Price'

export const Panel =(props)=>{
    if(props.part == undefined){return (<div></div>);}
    return (
            <div className="jumbotron">
                <h1 className="display-3">{props.part.title}</h1>
                <p className="lead">Detailed information of the part {props.part.id} called {props.part.title}</p>
                <hr className="my-4"/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-6" >
                            <Visual 
                                type={props.part.visual_type} 
                                src={props.part.visual_src} 
                            />
                           <div className="alert alert-info" role="alert">
                                    <p>ID: {props.part.id}</p>
                                    <p>NAME: {props.part.title}</p>
                            </div>
                                             
                            <Price value={props.part.price}/>
                        </div>
                        <div className="col-md-6 col-lg-6" >
                            <p> {props.part.description}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}