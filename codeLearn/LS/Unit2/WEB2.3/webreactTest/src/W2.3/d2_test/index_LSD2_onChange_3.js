
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';


function App() {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
   // setName(event.target.name);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div className="App">
      {console.log(name)}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name='username' type="text" onChange={handleChange} />
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