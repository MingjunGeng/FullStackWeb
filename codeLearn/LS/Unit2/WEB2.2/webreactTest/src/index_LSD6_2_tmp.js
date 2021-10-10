
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";


// function User(props){
//   // const [user, setUser] = useState("");
//   const { id } = props
//   console.log("##" + id)

// const JXS = (
//   <div>
//     <button >Get User</button>
//   </div>
// );
  
//   return JXS;
// }


// function App() {
//   const [id, setId] = useState(1);
// //  console.log( setId(9));
//   const increment = id => {
//     return setId(id+1)
//   }


//   return (
//       <div className="app"> 
//         <User id={id}/>
//         <button onClick={function(){increment(id)}}>ccc</button>
//       </div>
//      )
// }

// function App(props) {  
//   // const {cohort, name, age, week} =props
//   console.log(props.o.age)
//   console.log(props)
  
//   return (
//     <div className='container'>
//       <h1>Welcome to React, Web {props.cohort}</h1>
//       <p>Hello, {props.name}, you are {props.age}</p>
//       <div>It is week {props.week}</div>

//       {/* <Playground /> */}
//       {/* <Playground userLoggedIn = "false" /> */}
//       {/* <Playground userLoggedIn = "true" /> */}
//       {/* <Playground userLoggedIn = {true} userLoggedOut = "" /> */}
//     </div>
//   )
// }

// const obj = {cohort: '37', name: 'Casey', age: '74', week: 2}
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   // <App cohort='37' name = 'Casey' age = '74' week={2}/>,
//   <App o ={obj}/>,
//   rootElement
//   );


// function User(props){
//   // const [user, setUser] = useState("");
//   const { id } = props
//   console.log("##" + id)

// const JXS = (
//   <div>
//     <button >Get User</button>
//   </div>
// );
  
//   return JXS;
// }


// function App() {
//   // const [id, setId] = useState(1);

//   // const increment = id => {
//   //   setId(id+1)
//   // }

//   return (
//   <div className="app"> 
//     {/* {
//       <User id={id}/>
//     } */}
//     {/* <button onClick={e=>setId(id+1)}>
//       Increment {id} to {id+1}
//     </button> */}
//     {/* <button onClick={e => increment(id)}>
//       Increment {id} to {id+1}
//     </button> */}
//      </div>)
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <App />, 
//   rootElement
//   );



function App(props) {
  const {age, cohort, gender, name, allowLoggedIn } = props;

  console.log('props in APP: ', props);
  console.log('allowLoggedIn in APP: ', allowLoggedIn);
  
  console.log('age: ', name);
  console.log('gender: ', gender);  // undefined - NO ERROR !!!
  // console.log('sex: ', sex); //Uncaught ReferenceError: sex is not defined
  
  /*  document.createElement('div');
      elem.classList.add('container'); */   
      
  /* logout = () => {  } */

  /*
  if (allowLoggedIn) 
  return (   
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1>
      <p>Hello, {props.name}, you are {props.age}, Your loggedIn Status: {props.allowLoggedIn} </p>
      <p>Hello, {name}, you are {age}, Your loggedIn Status: {allowLoggedIn}</p>
      <Playground loggedIn={true}  />
      
    </div>  )
  else return (
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1>
      <p>Hello, {props.name}, you are Welcome to SigIn </p>
      <Playground loggedIn={false}  />
      
    </div> );
    */

  return (
    <div className='container'>
      {
        allowLoggedIn ? 
        <>
          <h1>Welcome to React, Web {props.cohort}</h1>
          <p> Hello, {props.name}, you are {props.age}, Your loggedIn Status: {props.allowLoggedIn ? 'allowed' : 'not allowed'} </p> 
          <p> {name}'s loggedIn Status: {allowLoggedIn ? 'allowed' : 'not allowed'}</p>
          {/* <Playground name ={name} loggedIn={allowLoggedIn} sex = {props.sex} age = {age}/>  */}
        </>  :
        <>
          <h1>Welcome to React, Web {props.cohort}</h1>
          <p> Hello, {props.name}, you are {props.age}, Your loggedIn Status: {props.allowLoggedIn ? 'allowed' : 'not allowed'} </p> 
          <p> {name}, Please SigIn to Enter Playground! </p>
          {/* <Playground name ={props.name} loggedIn={props.allowLoggedIn} sex = {props.sex} age = {props.age}/> */}
        </>
      }
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App cohort='48' name='Rongjun' age = '74' sex = 'M' allowLoggedIn = {false}  />,
  rootElement
  );

// render(
//   <App cohort='48' name='Rongjun' age = '74' sex = 'M' allowLoggedIn = {false}  />,
//   document.querySelector('#root')
// )