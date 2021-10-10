// import React, { useState } from "react";
import ReactDOM from "react-dom";

/**  Method 1 (import) */
import React, { useState, useEffect } from "react";


// function User(props){
//   return (
//     <h4>Showing user {props.id}</h4>
//   //   <div style={{color, border:`4px solid ${color}`, padding:'8px'}}>
//   //   <div>User id is {}</div>
//   //   <div>User is dressed in</div>
    
//   // </div>

//   );
// }

function User(props){
  const [color, setColor] = useState(0);
  return (
    <h4>Showing user {props.id}</h4>
    // <div>

    // </div>


  //   <div style={{color, border:`4px solid ${color}`, padding:'8px'}}>
    // <div>User id is {props.id}</div>
    // <div>User is dressed in{color}</div>
    // <button onClick={e=>setColor('red')}>red</button>
    // <button onClick={e=>setColor('green')}>green</button>
  // </div>


  );
}
function App() {
  const [number, setNumber] = useState(0);
  
  // useEffect(()=>{
  //   console.log(`Count is ${count},You see me every time React finishes with the DOM`);
  // });
  // useEffect(()=>{
  //   console.log(`another effect`);
  // });
  return (
  <div > 
    <h1>Count: {number}</h1>
    {
      number < 4 && <User id = {number}/>
    }
    <button onClick={e=>setNumber(number+1)}>Increment Count</button>
    <button onClick={e=>setNumber(number-1)}>Decrement Count</button>
    <button onClick={e=>setNumber(1)}>Reset Count</button>
 
     </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );