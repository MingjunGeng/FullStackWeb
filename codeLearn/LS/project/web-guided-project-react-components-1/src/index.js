

import { render } from 'react-dom'
// import { useState } from 'react';


// m1//
import React , {useState} from "react";
function Hero() {
  const [healthPoints, setHealthPoints] = useState(100);
  const [isHappy, setIsHappy] = useState(true);
  // const eatGreat = e => {
  //   setHealthPoints(healthPoints + 20);
  // };
  const eatTerrible = e => {
    setHealthPoints(healthPoints - 20);
    setIsHappy(false);
  };
 
  return (
  <div>
    <div>Health Points: <span>{healthPoints}</span></div>
    <div>{isHappy ? 'Really Happy' : 'Having a bad day'}</div>
    <button onClick={e=>setHealthPoints(healthPoints + 20)}>Have a great meal</button>
    <button onClick={eatTerrible}>Have a terrible meal</button>
  </div>
  );
}


const rootElement = document.getElementById("root");
render(
  <Hero />,
  rootElement
);


