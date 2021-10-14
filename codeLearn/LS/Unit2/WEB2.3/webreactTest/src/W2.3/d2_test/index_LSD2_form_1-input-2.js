
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';


function App() {
  const [formData , setFormData] = useState({
    fname: '',
    lname: '',
    favToy: ''
  })
  // const [fname , setFname] = useState('')
  // const [lname , setLname] = useState('')
  // const [favToy , setFavToy] = useState('')

  const onInputChange = event => {
    // debugger
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  // const onLnameChange = event => {
  //   setLname(event.target.value)
  // }
  // const onFavToyChange = event => {
  //   setFavToy(event.target.value)
  // }
  return (
    <div className="app"> 
    <h1>The name is , and the age is {}</h1>
    <form > 
      <label >
      First name: 
      <input 
            name='fname'
            onChange={onInputChange}
            id='nameInput' 
            type='text'/>
      </label>
      <br/>

       <label >Last name: 
            <input 
            name='lname'
            onChange={onInputChange}
            id='ageInput' 
            type='text'/>
       </label><br/>

       <label >Favorite Toy: 
            <input 
            name='favToy'
            onChange={onInputChange}
            id='ageInput' 
            type='text'/>
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