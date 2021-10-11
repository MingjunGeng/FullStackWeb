import React  from 'react'

import { render } from 'react-dom'
import "./styles.less"

/**  Method 1 () */
// const siths = [{name: 'Darth Vader'}, {name: 'Palpatine'}];
//  function App() {
//    return  <div>Hello, {siths[0].name }! How are you doing? </div>
// }

// const rootElement = document.getElementById("root");
// render(
//   <App />,
//   rootElement
//   );

// /**  Method 1 () */
// const siths = [{name: 'Darth Vader'}, {name: 'Palpatine'}];
// function App(prop) {
//   const friends = prop.friends;
//   return  <div>Hello, {friends[0].name }! How are you doing? </div>
// }

// const rootElement = document.getElementById("root");
// render(
//   <App friends={siths} />,
//   rootElement
//   );

/**  Method 2 () */
const siths = [{name: 'Darth Vader'}, {name: 'Palpatine'}];
// function App(prop) {
//   const friends = prop.friends;}
// ==function App({friends}) {}
function App({friends}) {
    
  // siths.forEach(element => {
  //   console.log("hh   ", element)
  // });
  //   for(let i=0; i< siths.length; i++){
  //     console.log("hh   ", siths[i])
  //   }
  return (
    <>
      {/* <div>Hello, {friends[0].name }! How are you doing? </div>
      <div>Hello, {friends[1].name }! How are you doing? </div> */}
      <Greeter who={friends[0].name}/>
      <Greeter who={friends[1].name}/>
      <ThingEnumerator thing='dollars' count={friends.length * 3} />
    
    </>
  )
}
function Greeter(props){
  const { who } = props;
  return <div>Hello. {who}! How are you doing? </div>
}
function ThingEnumerator(props){
  const { thing, count} = props;
  return <h3>I have {count} {thing}!</h3>
}
const rootElement = document.getElementById("root");
render(
  <App friends={siths} />,
  rootElement
  );