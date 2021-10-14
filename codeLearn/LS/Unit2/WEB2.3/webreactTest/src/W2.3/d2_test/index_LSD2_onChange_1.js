
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";



function App() {
 



  return (
    <div className="app"> 
    <h1>hhhh</h1>
    <form method='post'> 
      <label htmlFor='fnameInput'>First Name</label>
      
      <input onChange={event => console.log(event)} />

      <br/>

 

      <input type='submit'/>
    </form>
      

    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );