
import ReactDOM from "react-dom";
import * as yup from 'yup'
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';

const schema = yup.object().shape({
  user: yup.string().required('user is required').min(6, 'user needs to be 6 char min'),
  star: yup.string().oneOf(['wars', 'trek'], 'you must select a star'),
  language: yup.string().oneOf(['1','2','3'], 'Yo must choose a language'),
  agree: yup.boolean().oneOf([true], 'you must give away all your data')
})
const initForm = {
  user: '',
  star: '',
  agree: false,
  language: '', 
}
function App() {
 const [form, setForm] = useState(initForm)
 const [errors, setErrors] = useState({
  user: '',
  star: '',
  agree: '',
  language: '', 
})
const [disabled, setDisabled] = useState(true)

const setFormErrors = (name, value) => {
  yup.reach(schema, name).validate(value)
    .then( () => setErrors( {...errors, [name]: ''}))
    .catch(err => setErrors( {...errors, [name]: err.errors[0]} ))
}

useEffect( () =>{
  schema.isValid(form).then(valid => setDisabled(!valid))
},[form])


 const change = event => {
  const {checked, value, name, type} = event.target
  const valueToUse = type === 'checkbox' ? checked: value
  setFormErrors(name, valueToUse)
  setForm({...form, [name]: valueToUse})
 }

  return (
    <div className="container"> 
    <h1>The name is , and the age is {}</h1>
    <div style={ { color: 'red'}}> 
      <div>{errors.user}</div> <div>{errors.star}</div> <div>{errors.agree}</div> <div>{errors.language}</div>
    </div>
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
            // value='agree'
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
        <button disabled={disabled}>submit</button>
      </label>

    </form>
      

    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );