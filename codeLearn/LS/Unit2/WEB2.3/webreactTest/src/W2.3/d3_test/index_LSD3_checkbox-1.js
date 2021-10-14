
import ReactDOM from "react-dom";
import * as yup from 'yup'
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";
import axios from 'axios';

function App() {
  // The state `form.isGoing` will drive a checkbox and is a boolean, whereas the rest are strings
  const [form, setForm] = useState({ user: '', ageRange: '', state: '', isGoing: false });

 // const handleChange = event => { console.log('changing!') };
  const handleChange = event => {
    // Pull out the info of interest
    const { name, type, value, checked } = event.target;
    // Find out which value to use (the actual "value" of the target or its "checked" in the case of a checkbox)
    const updatedInfo = type === 'checkbox' ? checked : value;
    // Update state
    setForm({ ...form, [name]: updatedInfo });
  }

  return (
    <div className="App">
      <form>
        <label>User Name:
          <input value={form.user} name="user" type="text" onChange={handleChange} />
        </label>

        <label>13-18
          <input
            name="ageRange" type="radio" value="a"
            checked={form.ageRange === "a"} onChange={handleChange}
          />
        </label>
        <label>19-24
          <input
            name="ageRange" type="radio" value="b"
            checked={form.ageRange === "b"} onChange={handleChange}
          />
        </label>
        <label>25+
          <input name="ageRange" type="radio" value="c"
          checked={form.ageRange === "c"} onChange={handleChange}
        />
        </label>

        <label>State:
          <select value={form.state} name="state" onChange={handleChange}>
            <option value="">--select a state--</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
          </select>
        </label>

        <label>RSVP:
          <input
            name="isGoing"
            type="checkbox"
            checked={form.isGoing}
            onChange={handleChange}
          />
        </label>

      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );