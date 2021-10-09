// Write your Character component here

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants'
// import './App.css';
import styled from 'styled-components';



const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid #dee0da;;
`


// const Details = (props) => {
function Details(props) {
    const { characterId, close } = props
    const [details, setDetails] = useState(null)
  


    console.log("Datail "+characterId)
    console.log(`${BASE_URL}/people/${characterId}`)

    useEffect(() => {
        axios.get(`${BASE_URL}/people/${characterId}`)
          .then(res => { setDetails(res.data) })
          .catch(err => { debugger }) // eslint-disable-line
      }, [characterId])

    return (
        <StyledFriend  className='container'>
            <h2>Details:</h2>
            {
              details &&
              <>
              <ul className="details">
                <li>{details.name}</li>
                <li>Gender: {details.gender}</li>
                <li>Height: {details.height}</li>
                <li>Mass: {details.mass}</li>
                <li>Birth Year: {details.birth_year}</li>
                <li>Eye Color: {details.eye_color}</li>
                <li>Hair Color: {details.hair_color}</li>
                <li>Skin Color: {details.skin_color}</li>
              </ul>
              </>
            }
            <button onClick={close}>Close</button>
          </StyledFriend>
    )
  }

  export default Details;