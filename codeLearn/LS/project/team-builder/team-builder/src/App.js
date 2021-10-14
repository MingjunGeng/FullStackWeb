

import React, { useState, useEffect  } from "react";
import NumberForm  from './components/NumberForm'
import axios from 'axios';

const initFormValues = {
  uname: '',
  email: '',
  role: '',
}



function App() {
  const [number, setNumber] = useState([]) 
  const [formValues , setFormValues] = useState(initFormValues)
  const [error, setError] = useState("");
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }
  const submitForm = () => {
    const newFriend = {
      uname: formValues.uname.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!error) {
      axios.post('/', newFriend)
        .then(resp => {
          const friendFromDb = resp.data;
          setNumber([friendFromDb, ...number]);
          //  d) also on success clear the form
          setFormValues(initFormValues);
        })
    }
  }
  console.log(formValues)
  return (
    <div className="container"> 
    <h1>Team Builder </h1>
    <NumberForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
    />
      {
        // number.map(friend => {
        //   return (
        //     <Number key={friend.id} details={friend} />
        //   )
        // })
      }
  </div>)
}


export default App;
