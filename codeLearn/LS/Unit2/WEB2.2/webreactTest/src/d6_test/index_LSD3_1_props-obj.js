
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


/**  Method 2 (props obj) START */
/* 
 * familiar prop transfer obj && {obj1,obj2}
 * user child() get  obj1 or obj2
*/
function Child(props){
  // const [user, setUser] = useState("");
  const {i}=props
  console.log("Child = ")
  console.log(props)
const JXS = (
  <div>
    <button >child {i}</button>
  </div>
);
  
  return JXS;
}

/**  Method 1 (props obj) */
function App(props) {  

  console.log("APP = ")
  console.log(props)
  console.log(Object.keys(props.oobjs))
 
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
        {
          // Object.key(props.oobjs).map((key) => {
          //   return <User obj = {props.oobjs[key]} />
          // })
          Object.keys(props.oobjs).map((key, i) => {
            return <Child obj = {props.oobjs[key] } i={i} />
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

