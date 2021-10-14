
import ReactDOM from "react-dom";
import  { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component, useReducer } from "react";



function App() {
  const [fname , setFname] = useState('')
  const [favVehicle , setFavVehicle] = useState('')
  const [isHappy , setIsHappy] = useState('')

  return (
    <div className="app"> 
    <h1>The name is {fname || 'unknown'}</h1>
    <h1>The fav vehicle is {favVehicle || 'unknown'}</h1>
    <h1>Are you {isHappy ? 'Happy' : 'unHappy'}</h1>
    <form > 
      <label htmlFor='fnameInput'>First Name</label>
      <input
        // in the <Watch> input --- event.target.value 
        onChange={event => {
          setFname(event.target.value)
        }}
        maxLength='15'
        placeholder='First Name'
        id='fnameInput'
        name='fname'
        type='text'
      />
      <br/>

       <label htmlFor='favVehicleSelect'>Fav VehicleSelect</label>
      <select id='favVehicleSelect' name='favVehicle'
          // in the <Watch> input --- event.target.value
          onChange={event => {
            setFavVehicle(event.target.value)
          }}
      >
        <option value='1'>Cars</option>
        <option value='2'>Trucks</option>
        <option >Planes</option>
      </select><br/>

      <label htmlFor='isHappyInput'>Are you happy?</label>
      <input 
        // in the <Watch> input --- event.target.checked
        onChange={event => {
          setIsHappy(event.target.checked)
        }}
        type='checkbox' 
        id='isHappyInput' 
        name='isHappy' 
        value='yeah'/><br/>

      <input type='submit'/>
    </form>
      

    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );