
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";



function App() {
 


  return (
    <div className="app"> 
    <h1>hhhh</h1>
    <form action="http://sooof.info"> 
      <label htmlFor='fnameInput'>First Name</label>
      <input
        maxLength='15'
        placeholder='First Name'
        id='fnameInput'
        name='fname'
        type='text'
      />
      <br/>

       <label htmlFor='favVehicleSelect'>Fav VehicleSelect</label>
      <select id='favVehicleSelect' name='favVehicle'>
        <option value='1'>Cars</option>
        <option value='2'>Trucks</option>
        <option value='3'>Planes</option>
      </select><br/>

      <label htmlFor='isHappyInput'>Are you happy?</label>
      <input type='checkbox' id='isHappyInput' name='isHappy' value='yeah'/><br/>

      <input type='submit'/>
    </form>
      

    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );