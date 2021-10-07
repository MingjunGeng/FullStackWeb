// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react'
import FriendsList from './FriendsList'


import Search from './Search'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friendsData, { hello} from '../dummy-data/friends'

//console.log(hello);
// console.log(Search.changeHandler)
// console.log(Search)
export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friends, setFriends] = useState(friendsData);
console.log(friends);
console.log(!friends[0].married);

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchTerm, setSearchTerm] = useState("");
  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa

  // const updatedFriends = friends.map( friend => {
  //   // return  console.log({ ...friend, married: !friend.married });
  //   return {friend,married: !friend.married};
  // });
  // console.log(updatedFriends);
  // console.log(friends);

  // const changeStatus = (id) => {
  //   console.log(id);
  //   const updatedFriends = friends.map( friend => {
  //     if(friends.id === id) {
  //       // console.log({ ...friend, married: !friend.married });
  //        return { ...friend, married: !friend.married };
  //      }else{
  //        return friend;
  //      }
  //   });
  //   console.log("App    "+updatedFriends);
  //   setFriends(updatedFriends);
  // }

const changeStatus = (id) => {
     /*
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i]
      }
    */
  console.log("####  =  "+id);
  const updatedFriends = friends.map(friend => {
    if (friend.id === id) {
      return { ...friend, married: !friend.married }
    } else {
      return friend;
    }
  })

  setFriends(updatedFriends);

}


// const getFilteredFriends = () => {
//   const term = searchTerm.trim().toLowerCase();
//   if (!term) return friends;

//   const filteredFriends = friends.filter(friend => {
//     return friend.name.toLowerCase().includes(term);
//   })

//   return filteredFriends;
// }
  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search setSearchTerm={setSearchTerm}/>

      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
      <FriendsList friends={friends} changeStatus={changeStatus}/>
      {/* <FriendsList friends={getFilteredFriends()} changeStatus={changeStatus} /> */}
    </div>
  )
}
