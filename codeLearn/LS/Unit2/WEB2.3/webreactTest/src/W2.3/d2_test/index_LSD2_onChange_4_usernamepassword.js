
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';



function App() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] =  useState({ username: "", password: "" });

  // const handleNameChange = event => {
  //   setUser({ ...user, username: event.target.value });
  // };

  // const handlePasswordChange = event => {
  //   setUser({ ...user, password: event.target.value });
  // };
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
  };

  return (
    <div className="App">
      {console.log({ user })}
     
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name='username' onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name='password' onChange={handleChange} />
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