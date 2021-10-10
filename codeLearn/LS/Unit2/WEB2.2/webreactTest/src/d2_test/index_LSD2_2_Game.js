import React, { useState } from "react";
import ReactDOM from "react-dom";

/**  Method 1 () */
// const Game = (props) => {
//   const { player } = props;
//   const [score, setScore] = useState(0)
//   const increase = () => {
//     setScore(score + 1);
//   }
//   return (
//     <div >
//       {/* {player} is at {score} */}
//       <ScoreBord player={player} score={score} />
//       {/* <button onClick={increase}>increase</button> */}
//       <ScoreIncreaser increase={increase}/>
//     </div>
//   );
// };
// function ScoreBord(props){
//   const {score, player} = props;
//   return <h3>{player} is at {score} points</h3>
// }
// function ScoreIncreaser(props) {
//   const { increase } = props;
//   return  <button onClick={increase}>increase</button>;
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Game player='Mj' />, 
//   rootElement
//   );

/**  Method 2 () */
// const Game = (props) => {
//   const { player } = props;
//   const [score, setScore] = useState(0)
//   const increase = () => {
//     setScore(score + 1);
//   }
//   const decrease = () => {
//     setScore(score - 1);
//   }
//   return (
//     <div >
//       <ScoreBord player={player} score={score} />
//       <ScoreChanger onScoreChange={increase} label = 'Increase!' score={score}/>
//       <ScoreChanger onScoreChange={decrease} label = 'Decrease!' score={score}/>
//     </div>
//   );
// };
// function ScoreBord(props){
//   const {score, player} = props;
//   return <h3>{player} is at {score} points</h3>
// }
// function ScoreChanger(props) {
//   const { onScoreChange, label, score } = props;
//   return  <button onClick={onScoreChange}> {label} {score} </button>;
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Game player='Mj' />, 
//   rootElement
//   );



function App() {
  const [points, setPoints] = useState(100)
  return <Child action={amount => setPoints(points + amount)} />
}
function Child(props) {
  return <button onClick={() => props.action(2)}>do it</button>
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );
// ReactDOM.render(<App />, root)