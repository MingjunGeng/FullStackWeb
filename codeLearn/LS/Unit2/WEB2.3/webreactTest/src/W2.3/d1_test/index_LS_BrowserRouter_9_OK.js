
import ReactDOM from "react-dom";
import  { BrowserRouter, Route, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";



const users = [ 
  {id: 1, name: 'Emily'},
  {id: 2, name: 'Anna'},
  {id: 3, name: 'Rory'},
];
  const fetchUser = id => Promise.resolve(
    users.find(user => user.id == id)
  );

const User = props => {
  const {id}  = props.match.params;
  //const user =fetchUser(id)
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   console.log('first render only')
  // }, []);
  useEffect( () => {
    fetchUser(id).then(user => setUser(user))
  },[id])

  if(!user) return <div>Fetching user...</div>
  console.log('first render only', user)
  console.log('first render only', user.name)

  //return <div> The id is , the name is </div>
  return <div> The id is {id}, the name is {user.name}</div>
};


function App() {
 
  return (
    <div className="app"> 
     <BrowserRouter>
        <Link to='/users/1'>Users 1 </Link> <br/>
        <Link to='/users/2'>Users 2 </Link> <br/>
        <Link to='/users/3'>Users 3 </Link> <br/>
        
        <Route exact path='/users/:id' component={User}/>
     </BrowserRouter>
      <h1>hhhh</h1>

    </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />, 
  rootElement
  );