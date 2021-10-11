
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component } from "react";





function App() {
 
  // const users = [ 
    // {id: 1, name: 'Emily'},
    // {id: 2, name: 'Anna'},
    // {id: 3, name: 'Rory'},
  // ];
  

  return (
    <div className="app"> 
     <BrowserRouter>
        <Link to='/users/1'>Users 1 </Link> <br/>
        <Link to='/users/2'>Users 2 </Link> <br/>
        <Link to='/users/3'>Users 3 </Link> <br/>
        
        <Route exact path='/users/:id' render={props => {
          const {id}  = props.match.params;
          return <div> The id is {id}</div>
        }}/>
     </BrowserRouter>
      <h1>hhhh</h1>

    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );