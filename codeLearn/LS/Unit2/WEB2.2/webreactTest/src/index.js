
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

// /**  Method 1 (props obj) START */
// /* 
//  * familiar prop transfer obj && {obj,obj}
// */
// function App(props) {  

//   console.log("APP = ")
//   console.log(props)
//   console.log(Object.keys(props.oobjs))
 
//   for (const key in props.oobjs) {
//       console.log(props.oobjs[key])
//     }
//     Object.keys(props.oobjs).map((key) => {
//             //console.log(key)
//             props.oobjs[key]
//           })
//     return(
//       <div>
//         <h1>Hello</h1>
//       </div>
//     );
  
// }

// const objs = {a:{cohort: '37', name: 'Casey', age: '74', week: 2}, c:{cohort: '55', name: 'ggg', age: '89', week: 5}}
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   // <App cohort='37' name = 'Casey' age = '74' week={2}/>,
//   <App oobjs ={objs}/>,
//   rootElement
//   );
// /**  Method 1 (props obj) END */


// /**  Method 2 (props obj) START */
// /* 
//  * familiar prop transfer obj && {obj1,obj2}
//  * user child() get  obj1 or obj2
// */
// function Child(props){
//   // const [user, setUser] = useState("");
//   const {i}=props
//   console.log("Child = ")
//   console.log(props)
// const JXS = (
//   <div>
//     <button >child {i}</button>
//   </div>
// );
  
//   return JXS;
// }

// function App(props) {  

//   console.log("APP = ")
//   console.log(props)
//   console.log(Object.keys(props.oobjs))
 
//   for (const key in props.oobjs) {
//       console.log(props.oobjs[key])
//     }
//     Object.keys(props.oobjs).map((key) => {
//             //console.log(key)
//             props.oobjs[key]
//           })
//     return(
//       <div>
//         <h1>Hello </h1>
//         {
//           // Object.key(props.oobjs).map((key) => {
//           //   return <User obj = {props.oobjs[key]} />
//           // })
//           Object.keys(props.oobjs).map((key, i) => {
//             return <Child obj = {props.oobjs[key] } i={i} />
//             // props.oobjs[key]
//           })
//         }
//       </div>
//     );
  
// }

// const objs = {a:{cohort: '37', name: 'Casey', age: '74', week: 2}, c:{cohort: '55', name: 'ggg', age: '89', week: 5}}
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   // <App cohort='37' name = 'Casey' age = '74' week={2}/>,
//   <App oobjs ={objs}/>,
//   rootElement
//   );
//   // /**  Method 2 (props obj) END */


/**  Method 3 (props obj) START */
/* 
 * familiar prop transfer obj && {obj1,obj2}
 * user child() get  obj1 or obj2
 * transfer method increase
*/
function Child(props){
  // const [user, setUser] = useState("");
  const {i, score,increase}=props
  console.log("Child = ",i, props)

const JXS = (
  <div>
    <button onClick={increase}>child {i} Count:{score}</button>
  </div>
);
  
  return JXS;
}

function App(props) {  

  console.log("APP = ", props)
  console.log(Object.keys(props.oobjs))

  const [score, setScore] = useState(0)
  const increase = () => {
    setScore(score + 1);
  }
 
  for (const key in props.oobjs) {
      console.log(props.oobjs[key])
    }
    Object.keys(props.oobjs).map((key) => {
            //console.log(key)
            props.oobjs[key]
          })

    return(
      <div>
        <h1>Hello </h1>
        <button onClick={increase}>father  {score}</button>
        {
          // Object.key(props.oobjs).map((key) => {
          //   return <User obj = {props.oobjs[key]} />
          // })
          Object.keys(props.oobjs).map((key, i) => {
            return <Child obj = {props.oobjs[key] } i={i} score={score} increase={increase}/>
            // props.oobjs[key]
          })
        }
      </div>
    );
  
}

const objs = {a:{cohort: '37', name: 'Casey', age: '74', week: 2}, c:{cohort: '55', name: 'ggg', age: '89', week: 5}}
const rootElement = document.getElementById("root");
ReactDOM.render(
  // <App cohort='37' name = 'Casey' age = '74' week={2}/>,
  <App oobjs ={objs}/>,
  rootElement
  );
  // /**  Method 3 (props obj) END */


