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
const id = 'greet';
const text = 'Hello';
function App() {
  // return React.createElement("div", { id: "greet" }, "Hello");
  // const id = 'greet';
  // const text = 'Hello';
  // return  <div className="my-greet" id="greet">Hello </div>;
  return  <div className="my-greet" id={id}>{text} </div>
}

const rootElement = document.getElementById("root");

render(
  //
  // React.createElement(App), 
  <App />,
  rootElement
  );