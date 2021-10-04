/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from 'react';

function Playground(props) {
  //1
  // const myarr = useState(0);
  // console.log(myarr);
  // const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [choice, setChoice] = useState('scissors');

  // console.log(count);
  console.log(props);
  console.log(typeof(props));
  console.log(typeof(props.userLoggedIn));
  console.log((props.userLoggedIn+''));
  console.log((typeof(props.userLoggedIn+'')));
  console.log(typeof(props.userLoggedIn=='ture'))
  console.log((props.userLoggedIn+''));
  console.log((props.userLoggedIn=='ture'))
  // console.log(typeof(true))
  // console.log(typeof('true'))
  console.log((props.userLoggedIn));
  if(spinnerOn){
    return (
      <div className="container">
      <h3>The spinner is {spinnerOn ? 'ON': 'OFF'}.</h3>
      <button onClick={() => setSpinnerOn(false) }>Turn off spinnerOn </button>
      <button onClick={() => setSpinnerOn(!spinnerOn)}>Toggle spinner...</button>
      {/* {Array.map(elem => {})} */}
    </div>
    )
  }
  return (
    // <div className={(props.userLoggedIn+'') ? "container" :  "non-container"}>
    //<div className={props.userLoggedIn=='ture' ? "container" :  "non-container"}>
    // use eval string to boolean
    //<div className="container" >
    <div className={eval(props.userLoggedIn) ? "container" :  "non-container"}>

      <h1>Welcome to the playground!</h1>
      { eval(props.userLoggedIn) ? <button>Log out</button> : <button>Log In</button> }
      <p>The current count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setSpinnerOn(true)}>Turn on Spinnah</button>
      <h3>The current weapon is {choice}</h3>
      <button onClick={() => setChoice('scissors')}>pick scissors</button>
      <button onClick={() => setChoice('rock')}>pick rock</button>
      <button onClick={() => setChoice('paper')}>pick paper</button>
    </div>
  )  
}

// TERNARY FUN
// if (a) {
//   name = "Casey";
// } else {
//   name = "Robert";
// }

// name = a ? "Casey" : "Robert";


export default Playground;