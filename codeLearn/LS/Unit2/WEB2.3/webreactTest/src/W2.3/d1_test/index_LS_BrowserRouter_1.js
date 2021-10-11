
import ReactDOM from "react-dom";
import  { BrowserRouter, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component } from "react";



function Home(props) {
    return <h1>Home Component </h1>
}

function About(props) {
  return <h1>About Component </h1>
}

function Contact(props) {
  return <h1>Contact Component </h1>
}

function App() {
  // const [id, setId] = useState(1);

  // const increment = id => {
  //   setId(id+1)
  // }

  return (
    <div className="app"> 
      <header className="App-header">
        <BrowserRouter>
          <Link to='/'>Home </Link>
          <Link to='/about'>About </Link>
          <Link to='/contact'>Contact </Link>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>

        </BrowserRouter>

        <h1>HH</h1>
      </header>
    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );