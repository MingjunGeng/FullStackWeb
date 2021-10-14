
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';


function App() {
  const [formValues , setFormValues] = useState({
    fname: '',
    lname: '',
  })

  const onValuesChange = event => {
    // debugger
    if(/^[a-zA-Z]+$/.test(event.target.value) ){
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
      })
    }

  }
const onFormSubmit = event => {
  event.preventDefault();
  alert(`submitting ${formValues.lname}, ${formValues.fname}`);
};

  return (
    <div className="app"> 
    <h1>The name is , and the age is {}</h1>
    <form className='component' onSubmit={onFormSubmit}> 
     
      <input 
            value={formValues.fname}
            name='fname'
            onChange={onValuesChange}
            placeholder='Enter First Name'
            />
      <br/>

       
            <input 
            value={formValues.lname}
            name='lname'
            onChange={onValuesChange}
            placeholder='Enter Last Name' 
            />
       <br/>

       
            <input 
            type='submit'/>
       <br/>


    </form>
      

    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );