
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';


function User(id){
  const [user, setUser] = useState("");
  console.log(id.id)
  console.log(`http://localhost:4000/friends/:${id.id}?api_key=xyz`)

  console.log("##")

  // const fetchUseer = (id) => {
    // axios.get(`http://localhost:4000/friends/:1?api_key=xyz`)
    //   .then(response => response.json())
      // .then(user => {
      //   console.log(user)
      //   setUser(user.name);
      // })
      // .catch(er => {})
  //}
  
  return (
    <div className="user">
      <div>{user}</div>
      <button onClick={e => fetchUseer(id)}>Get User</button>
    </div>
  );
}


function App() {
  const [id, setId] = useState(1);
  return (
  <div className="app"> 
    {/* <h1>Count: {id}</h1> */}
    {/* {
      number > 4 && <User id = {number}/>
    } */}
    {
      <User id={id}/>
    }
    <button onClick={e=>setId(id+1)}>
      Increment {id} to {id+1}
    </button>
    {/* <button onClick={e=>setNumber(number-1)}>Decrement Count</button>
    <button onClick={e=>setNumber(1)}>Reset Count</button> */}
 
     </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );