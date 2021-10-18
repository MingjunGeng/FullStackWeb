import React, { useState, useEffect, Component, useReducer } from "react";
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialFormValues = { petName: "", petType: "" };

function SimpleForm() {
  const [formValues , setFormValues] = useState(initialFormValues)
  const [pets , setPets] = useState(petsList)

  const change = (evt) =>{
    const {name, value} = evt.target;
    // Spreads the formValues key value pairs into a new object,
    // then updates the [name] (variable coming from evt.target)
    // to value, coming from evt.target.
    setFormValues({...formValues, [name]:value})
  }
    /**
   * Instead of doing this below (aka having different onChange handlers for
   * who knows how many inputs) we can instead simplify it by doing the above.
   */
  // const changePetName = (evt) => {
  //   setFormValues({ petType: formValues.petType, petName: evt.target.value});
  // }

  // const changePetType = (evt) => {
  //   setFormValues({ petName: formValues.petName, petType: evt.target.value});
  // }
  const submit = (evt) => {
    evt.preventDefault();

    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim()
    }
    // setPets(pets.concat(newPet));
     setPets([newPet, ...pets]);
    setFormValues(initialFormValues);
  }


  return (
    <div className='container'>
      <h1>Simple Form App</h1>
      {pets.map( (pet, idx) => 
        (
          <div key={idx}>
            {pet.petName} is  a {pet.petType}
          </div>
        )
      )}
      
      <form  onSubmit={submit} >
        <input 
          type="text"
          name="petName"
          value={formValues.petName}
          onChange={change}
        />
        <input
          type="text"
          name="petType"
          value={formValues.petType}
          onChange={change}
        />
        <input type="color" name="blah" />
        <input type="submit" value="Add a pet ya chump!" />
      </form>
      
    </div>
  )
}

render(
  <>
    <SimpleForm />
    <App />
  </>
  , document.querySelector('#root')
)
