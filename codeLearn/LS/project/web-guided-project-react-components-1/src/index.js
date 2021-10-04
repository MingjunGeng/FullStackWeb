import React, { useState } from 'react'
import { render } from 'react-dom'

import Playground from './components/Playground';
import Happy from './components/Happy';

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/
// We can pass (and typically do!) multiple 'props'
function App(props) {
  const { cohort, instructor, week } = props;

  const [happy, setHappy] = useState(false);

  // JSX
  return (
    <div className="container">
      <div className='container'>
        <h1>Welcome to React, Web {cohort}</h1>
        <Happy happy={happy} setHappy={setHappy} />
        <div>It is week {week}</div>
        <input type="text" />
        <button>I'm a button!</button>
        <Playground cohort={cohort} instructor={instructor} happy={happy}/>
      </div>
    </div>
  )
}

render(
  <App cohort='46' instructor='Casey' week={2} />,
  document.querySelector('#root')
)