
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';


function App() {
  const [name , setName] = useState('')
  const [age , setAge] = useState('')
  const onSubmit = evt => {
    evt.preventDefault();
    // axios.get(`?name=${name}&age=${age}`)
    axios.post('/', {name, age});
  };
  const onNmaeChange = event => {
    setName(event.target.value)
  }
  const onAgeChange = event => {
    setAge(event.target.value)
  }

  return (
    <div className="app"> 
    <h1>The name is {name}, and the age is {age}</h1>
    <form onSubmit={onSubmit}> 
      <label >
      name: <input 
            onChange={onNmaeChange}
            id='nameInput' 
            type='text'/>
      </label>
      <br/>

       <label >
       age: <input 
            onChange={onAgeChange}
            id='ageInput' 
            type='number'/>
       </label><br/>

      <label >
        <button>send</button>
      </label>

    </form>
      

    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );