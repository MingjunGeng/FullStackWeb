
import axios from 'axios';
import * as yup from 'yup'
import React, { useState, useEffect} from "react";
import FriendForm from './FriendForm'
import Friend from './Friend'
// import './App.css';

const schema = yup.object().shape({
  username: yup.string().required('user is required').min(6, 'Username needs to be 6 char min'),
  email: yup.string()
  .email('Must be a valid email address!')
  .required('Email is required!'),
  password: yup
  .string().required('user is required').min(6, 'Password needs to be 6 char min'),
  agree: yup.boolean().oneOf([true], 'you must agree ')
})
const initForm = {
  username: '',
  email: '',
  password: '',
  agree: false,
}


const initialFriends = []


function App() {
  const [errors, setErrors] = useState(initForm)
 const [disabled, setDisabled] = useState(true)
 const [friends, setFriends] = useState(initialFriends)     
 
 const setFormErrors = (name, value) => {
   yup.reach(schema, name).validate(value)
     .then( () => setErrors( {...errors, [name]: ''}))
     .catch(err => setErrors( {...errors, [name]: err.errors[0]} ))
 }
 
 useEffect(() => {
    getFriends()
  }, [])
 useEffect( () =>{
   schema.isValid(friends).then(valid => setDisabled(!valid))
 },[friends])
 
 
  const change = event => {
   const {checked, value, name, type} = event.target
   const valueToUse = type === 'checkbox' ? checked: value
   setFormErrors(name, valueToUse)
   setFriends({...friends, [name]: valueToUse})
  }

  const getFriends = () => {
    axios.get('http://buddies.com/api/friends')
    .then(res => {
      console.log("App.js: res.data = ", res.data)
      setFriends(res.data)
    }).catch(err => console.error(err))
  }

  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      civil: formValues.civil.trim(),
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
      hobbies: formValues.agree
    }
    console.log("App.js newFriend = ", newFriend)
    postNewFriend(newFriend);
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
  }

  const postNewFriend = newFriend => {
    axios.post('http://buddies.com/api/friends', newFriend)
    .then(res => {

      setFriends([res.data, ...form]);
     // setFormValues(initialFormValues);
    }).catch(err => {
      console.error(err);
     // setFormValues(initialFormValues);
    }).finally( ()=>{
     // setFormValues(initialFormValues);
    })
  }
 

  // const postNewFriend = newFriend => {
  //   // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
  //   //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
  //   //    and regardless of success or failure, the form should reset
  //   axios.post('http://buddies.com/api/friends', newFriend)
  //   .then(res => {

  //     setFriends([res.data, ...friends]);
  //     setForm(initForm);
  //   }).catch(err => {
  //     console.error(err);
  //     setForm(initForm);
  //   }).finally( ()=>{
  //     setForm(initForm);
  //   })
  // }


  return (
    <div className="container">
      <h1>User Onboarding</h1>

      <FriendForm
        values={friends}
        change={change}
       submit={formSubmit}
        disabled={disabled}
        errors={errors}
      />
  
      
        {
          friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }

    </div>
  );
}

export default App;