
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";



function App() {
 

  const change = event => {
    console.log(event.target.value)
    console.log(event.target.name)
    }

  return (
    <div className="app"> 
    <h1>hhhh</h1>
    <form method='post'> 
      <label name='lable' htmlFor='fnameInput'>First Name
      
      <input name='fname' onChange={change
        // event => {
        // console.log(event.target.value)
        // console.log(event.target.name)
        // }
        } />

      <br/>
      </label>
 

      <input type='submit'/>
    </form>
      

    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );