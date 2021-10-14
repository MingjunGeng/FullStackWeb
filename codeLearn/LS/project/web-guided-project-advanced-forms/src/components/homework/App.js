import React, { useState, useEffect } from 'react'
import Friend from './Friend'
import FriendForm from './FriendForm'
import schema from '../validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  agree: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  agree: false,
}
const initialFriends = []
const initialDisabled = true


export default function App() {
  const [friends, setFriends] = useState(initialFriends)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  // const getFriends = () => {
  //   // 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT FRIENDS IN STATE
  //   //    helper to [GET] all friends from `http://buddies.com/api/friends`
  //   axios.get('http://buddies.com/api/friends')
  //   .then(res => {
  //     console.log("App.js: res.data = ", res.data)
  //     setFriends(res.data);
  //   }).catch(err => console.error(err))
  // }

  // const postNewFriend = newFriend => {
 
  //   axios.post('http://buddies.com/api/friends', newFriend)
  //   .then(res => {

  //     setFriends([res.data, ...friends]);
  //     setFormValues(initialFormValues);
  //   }).catch(err => {
  //     console.error(err);
  //     setFormValues(initialFormValues);
  //   }).finally( ()=>{
  //     setFormValues(initialFormValues);
  //   })
  // }

  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //     .validate(value)
  //     .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  //     .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  // }


  // const inputChange = (name, value) => {
  //   // 🔥 STEP 10- RUN VALIDATION WITH YUP
  //   validate(name, value);
  //   setFormValues({
  //     ...formValues,
  //     [name]: value // NOT AN ARRAY
  //   })
  // }

  // const formSubmit = () => {
  //   const newFriend = {
  //     username: formValues.username.trim(),
  //     email: formValues.email.trim(),
  //     password: formValues.username.trim(),
  //     // 🔥 STEP 7- WHAT ABOUT HOBBIES?
  //     agree: formValues.agree.trim()
  //   }
  //   console.log("App.js newFriend = ", newFriend)
  //   postNewFriend(newFriend);
  //   // 🔥 STEP 8- POST NEW FRIEND USING HELPER
  // }


  // useEffect(() => {
  //   getFriends()
  // }, [])

  // useEffect(() => {
  //   // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  //   schema.isValid(formValues).then(valid => setDisabled(!valid))
  // }, [formValues])

  return (
    <div className='container'>
      <header><h1>User Onboarding</h1></header>

      <FriendForm
        values={formValues}
        // change={inputChange}
        // submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}
