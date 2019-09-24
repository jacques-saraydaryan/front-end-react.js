// import react tools
import React from 'react';
import ReactDOM from 'react-dom';
// import the created App component
import App from './App';

//Insert a <App> component inside the <div id='root'/>
// send the property title to the App component
ReactDOM.render(<App title="default title"/>, document.getElementById('root'));
