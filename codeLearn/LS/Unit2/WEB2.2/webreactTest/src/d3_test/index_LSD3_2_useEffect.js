// import React, { useState } from "react";
import ReactDOM from "react-dom";

/**  Method 1 (import) */
// function App() {
//   const [points, setPoints] = useState(100)
//   console.log(points);
//   return <Child action={amount => setPoints(points + amount)} />
// }
// function Child(props) {
//   console.log(props.action)
//   return <button onClick={() => props.action(3)}>do it</button>
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <App />, 
//   rootElement
//   );
//  return  <div >do it</div> 

/**  Method 2 (import) */
// function App() {
//   const [count, setCount] = useState(0);
//   const [isHappy, setIsHappy] = useState(true);
//   return (
//   <div > 
//     <h1>Count: {count}</h1>
//     {
//       isHappy
//       ? <h3>So Happy!!!</h3>
//       : <h3>Not  Happy at all...</h3>
//     }
//     <button onClick={e=>setCount(count+1)}>Increment Count</button>
//     <button onClick={e=>setIsHappy(true)}>Make Happy</button>
//     <button onClick={e=>setIsHappy(false)}>Make Unhappy</button>
//      </div>)
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <App />, 
//   rootElement
//   );

/**  Method 3 (import) */
import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [isHappy, setIsHappy] = useState(true);
  useEffect(()=>{
    console.log(`Count is ${count},You see me every time React finishes with the DOM`);
  });
  useEffect(()=>{
    console.log(`another effect`);
  });
  return (
  <div > 
    <h1>Count: {count}</h1>
    {
      isHappy
      ? <h3>So Happy!!!</h3>
      : <h3>Not  Happy at all...</h3>
    }
    <button onClick={e=>setCount(count+1)}>Increment Count</button>
    <button onClick={e=>setIsHappy(true)}>Make Happy</button>
    <button onClick={e=>setIsHappy(false)}>Make Unhappy</button>
     </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );