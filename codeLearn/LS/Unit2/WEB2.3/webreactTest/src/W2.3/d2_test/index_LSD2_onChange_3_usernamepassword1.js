
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';



function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = event => {
    setName({...name, name:event.target.value});
  };

  const handlePasswordChange = event => {
    setPassword({...password, password:event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
    console.log(password);
  };

  return (
    <div className="App">
      {console.log({ name })}
      {console.log({ password })}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" onChange={handleNameChange} />
        </label>
        <label>
          Password:
          <input type="text" onChange={handlePasswordChange} />
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