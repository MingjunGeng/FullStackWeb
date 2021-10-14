
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';


function App() {
  const [name , setName] = useState('')
  const [age , setAge] = useState('')

  return (
    <div className="app"> 
    <h1>The name is {name}, and the age is {age}</h1>
    <form onSubmit={evt =>{
        evt.preventDefault();
        // axios.get(`?name=${name}&age=${age}`)
        axios.post('/', {name, age});
    }}> 
      <label >
      name: <input 
            onChange={event => {
              setName(event.target.value)
            }}
            id='nameInput' 
            type='text'/>
      </label>
      <br/>

       <label >
       age: <input 
            onChange={event => {
              setAge(event.target.value)
            }}
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