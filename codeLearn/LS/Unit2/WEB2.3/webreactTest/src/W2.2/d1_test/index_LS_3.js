import React,  { useState }   from 'react'

import { render } from 'react-dom'
// import { useState } from 'react';

function Bulb() {
  // const something = useState(false);
  // const isBulbOn = useState[0];
  // const isBulbOff = useState[1];
  const [isBulbOn, setIsBulbOn] = useState(false);

  setTimeout(() => {
    setIsBulbOn(!isBulbOn)
  },1000)

  // if(isBulbOn){
  //   return <div>The lightbulb is ON</div>;
  // }
  // return <div>The lightbulb is OFF</div>;
  return <div>The lightbulb is {isBulbOn? 'ON' : 'OFF'}</div>;
}


const rootElement = document.getElementById("root");
render(
  <Bulb />,
  rootElement
);