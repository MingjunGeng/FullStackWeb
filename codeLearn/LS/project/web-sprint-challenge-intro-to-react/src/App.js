import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Characters from './components/Character'
import Details from './components/Detail'
import { BASE_URL } from './constants'
import './App.css';



// const App = () => {
  function App() {
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState('')
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openDetails = id => {
     console.log("currentCharacterId = "+ currentCharacterId)
    setCurrentCharacterId(id)
  }
  
  console.log("currentCharacterId = "+ currentCharacterId)

  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/people`)
      .then(res => {
        console.log(res.data)
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="container">
      <h1 className="Header">REACT WARS </h1>
      {
        characters.map(fr => {
          return <Characters key={fr.id} info={fr} action={openDetails} />
        })
      }
      {
        currentCharacterId && <Details characterId={currentCharacterId} close={closeDetails} />
      }
    </div>
  )
}

export default App;
