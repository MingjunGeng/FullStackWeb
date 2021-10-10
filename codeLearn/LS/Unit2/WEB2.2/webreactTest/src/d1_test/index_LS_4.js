

import { render } from 'react-dom'
// import { useState } from 'react';


// m1//
// import React from "react";
// function Bulb() {
//   // const something = useState(false);
//   // const isBulbOn = useState[0];
//   // const isBulbOff = useState[1];
//   const [isBulbOn, setIsBulbOn] = useState(false);

//   setTimeout(() => {
//     setIsBulbOn(!isBulbOn)
//   },1000)

//   // if(isBulbOn){
//   //   return <div>The lightbulb is ON</div>;
//   // }
//   // return <div>The lightbulb is OFF</div>;
//   return <div>The lightbulb is {isBulbOn? 'ON' : 'OFF'}</div>;
// }


// const rootElement = document.getElementById("root");
// render(
//   <Bulb />,
//   rootElement
// );

// m1
// import React   from 'react'
// const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
// const yellow =
//   "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

// function App() {
//   return (
//     <div className="App">
//       <img src={white} />
//       <img src={yellow} />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);

import React, {useState} from "react";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {

  const [lightOn, setLightOn ] = useState();

  return (
    <div className="App">
      <img src={white} />
      <img src={yellow} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
