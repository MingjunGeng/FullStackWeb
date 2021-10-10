import React from "react";
import ReactDOM from "react-dom";

/**  Method 5 (import) */
const GrandChild = props => {
  return (
    <div>
      <h3>Grand Child: {props.name}</h3>
    </div>
  );
};
const Child = props => {
  console.log(props);
  return (
    <div>
      <h2>Child: {props.personData.childName}</h2>
      <GrandChild personData={props.grandChildName} />
    </div>
  );
};
const Parent = props => {
  return (
    <div>
     <h1>Parent: {props.personData.parentName}</h1>
     <Child personData={props.personData} />
    </div>
  );
};
const App = () => {
  const personData = {
    parentName: 'Gilbert',
    childName: 'Regina',
    grandChildName: 'Ryan'
  }
  return (
    <div >hhh
      {/* <h2>Simpsons Lineage</h2> */}
      <Parent
        personData={personData}
      />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
