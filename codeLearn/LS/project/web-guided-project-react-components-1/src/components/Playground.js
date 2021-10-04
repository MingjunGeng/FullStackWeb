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

import React, {useState} from 'react';

// const Playground = (props) =>
function Playground(props) {
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);

  // const { cohort, instructor } = props

  if (spinnerOn) {
    return (
      <div>
        <p>Loading, please wait!</p>
        <button onClick={() => setSpinnerOn(!spinnerOn)}>Turn spinner off</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome to Web{props.cohort}</h1>
      <h4>{props.happy ? 'Happy!' : 'SAD'}</h4>
      <p>Your instructor, {props.instructor}, welcomes you!</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
      <button onClick={() => setCount(count - 1)}>Subtract one</button>
      <button onClick={() => setSpinnerOn(!spinnerOn)}>Toggle spinner...</button>
      <p>Count is: {count}</p>
    </div>
  )
}

export default Playground;