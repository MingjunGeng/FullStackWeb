import React  from 'react'

import { render } from 'react-dom'


// no work
// import React from "react";
// import ReactDOM from "react-dom";
// // import App from "./App";
// import "./styles.css";
// export default function App() {
//   return <div id="greet">Hello </div>;
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(React.createElement(App), rootElement);


// m1 //
// const id = 'greet';
// const text = 'Hello';
// function App() {
//   // return React.createElement("div", { id: "greet" }, "Hello");
//   // const id = 'greet';
//   // const text = 'Hello';
//   // return  <div className="my-greet" id="greet">Hello </div>;
//   return  <div className="my-greet" id={id}>{text} </div>
// }


// const rootElement = document.getElementById("root");

// render(
//   //
//   // React.createElement(App), 
//   <App />,
//   rootElement
//   );


// const Intro = () => {
//   return (

//       {
//           type: 'div',
//           props: {
//               children: {
//                   type: 'h1',
//                   props: {
//                       children: "Hi Lambda!"
//                   }
//               }
//           }
//       }

//   );
// };

// const Intro = () => {
//   return (
//     <div>
//       <h1>Hi Lambda!</h1>
//     </div>
//   );
// };

// const Intro = () => {
//   const greeting = "Hi Lambda!";
//   return (
//     <div>
//       <h1>{greeting}</h1>
//     </div>
//   );
// };


// show img
// function App() {
//   return (
//     <div className="App">
//       <img
//         src="https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png"
//         alt="lightbulb"
//       />
//     </div>
//   );
// }

const image =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";
const titleObj = {
  title: "Light Bulb!"
};
function App() {
  return (
    <div className="App">
      {/* this evaluates down to the string "LightBulb!" */}
      <h2>{titleObj.title}</h2> {}
      {/* this will evaluate down to the image url string for the img src */}
            <img src={image} alt="lightbulb" /> 
    
    </div>
  );
}


const rootElement = document.getElementById("root");

render(
  //
  // React.createElement(App), 
  <App />,
  rootElement
  );