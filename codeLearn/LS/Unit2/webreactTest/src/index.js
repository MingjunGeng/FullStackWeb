
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";



function User(props){
  // const [user, setUser] = useState("");
  const { id } = props
  console.log("##" + id)

const JXS = (
  <div>
    <button >Get User</button>
  </div>
);
  
  return JXS;
}


function App() {
  const [id, setId] = useState(1);

  const increment = id => {
    setId(id+1)
  }

  return (
  <div className="app"> 
    {
      <User id={id}/>
    }
    {/* <button onClick={e=>setId(id+1)}>
      Increment {id} to {id+1}
    </button> */}
    <button onClick={e => increment(id)}>
      Increment {id} to {id+1}
    </button>
     </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );