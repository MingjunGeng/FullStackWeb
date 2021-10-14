
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';



function App() {

  const [user, setUser] =  useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
    setUser({ username: '', password: '' });//we want to clear the input fields when we hit submit.
  };

  return (
    <div className="App">
      {console.log({ user })}
     
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text"value={user.username} name='username' onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="text"value={user.password} name='password' onChange={handleChange} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );