
import ReactDOM from "react-dom";
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, Component } from "react";



function Home(props) {
    return <h1>Home Component </h1>
}
function Blog(props) {
  const {push} = props.history;
  return( 
    <>
      <h1>Blog Component </h1>
      <button onClick={()=>{ push("/")}} >back home </button>
    </>
    )
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
        <Router>
          <Link to='/'>Home </Link>
          <Link to='/blog'>Blog </Link>
          <Link to='/about'>About </Link>
          <Link to='/contact'>Contact </Link>

          <Route exact path='/' component={Home}/>
          <Route path='/blog' render={() => <h1>The Blog! </h1>} />
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>

        </Router>

        <h1>HH</h1>
      </header>
    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );