
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';


function App() {
 const [form, setForm] = useState({
   user: '',
   star: '',
   agree: false,
   language: '', 
 })
 const change = event => {
  const {checked, value, name, type} = event.target
  const valueToUse = type === 'checkout' ? checked: value
  setForm({...form, [name]: valueToUse})
 }
  return (
    <div className="container"> 
    <h1>The name is , and the age is {}</h1>
    <form > 
      <label >
      User
      <input 
            onChange={change}
            value={form.user}
            name='user'
            type='text'/>
      </label>
      <br/>

       <label >Star Trek
            <input 
            onChange={change}
            checked={form.star === 'trek'}
            value="trek"
            name='star'
            type='radio'/>
       </label><br/>
       <label >Star Wars
            <input 
            onChange={change}
            checked={form.star === 'wars'}
            value="wars"
            name='star'
            type='radio'/>
       </label><br/>

       <label >Give away your data
            <input 
            onChange={change}
            checked={form.agree}
            value='agree'
            name='agree'
            type='checkbox'/>
       </label><br/>

       <label>Role
          {/* Select */}
          <select onChange={change} value={form.language} name='language' >
            <option value=''> --- Select One --- </option>
            <option value='1'>JavaScript</option>
            <option value='2'>Python</option>
            <option value='3'>Java</option>
          </select>
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