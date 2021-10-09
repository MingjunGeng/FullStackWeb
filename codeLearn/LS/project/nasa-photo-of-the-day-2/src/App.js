import React, { useEffect, useState } from 'react'
import Pictures from "./Pictures/Pictures";
import SearchBar  from './SearchBar/SearchBar';
import {BASE_URL, API_KEY} from './constants'
import "./App.css";
import axios from 'axios';


import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid red;
  // -------- grab some of our theme styles!
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white};
  // -------- media query fun! @media (max-width: 550px) {}
  @media ${pr => pr.theme.breakpointMobile} {
    width: 100%;
  }
  // -------- transitions / animations / ampersand / pseudo-classes
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${pr => pr.theme.secondaryColor};
  }
  &::before {
    content: '💚';
  }
  button {
    background-color: ${pr => pr.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
    }
  }
  transform: scale(2); //-> start of animation
  opacity: 0; //-> start of animation
  animation: ${kf} 0.3s ease-in-out forwards;
`



function App() {
  const [pictures, setPictures] = useState([])
  const [searchState, setSearchState] = useState("");
  const [currentPictureId, setCurrentPictureId] = useState(null)

  const openDetails = id => {
    setCurrentPictureId(id)
  }
  const closeDetails = () => {
    setCurrentPictureId(null)
  }

  useEffect(() => {
    // console.log(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    // console.log(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&count=5`)
    // axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&count=15`)
      .then(res => {
 
       res.data.forEach( (picture, i) => {
        picture.id =i+1
      })

        setPictures(res.data);
      }).catch(err => console.error(err));
  }, [])

  console.log(pictures)
  

const  Pic= props => (
  <div className='pictures'>
    {props.info.date}
    {props.info.id}
    <button onClick={() => openDetails(props.info.id)}>
      See details
    </button>
  </div>
)
console.log(currentPictureId)
  return (
    <div className="App">
      {
         <SearchBar setSearchState={setSearchState}/>
      }
      <div className='container'>
        <h1>Some of NASA picture :</h1>
        {pictures.length === 0 && <p>LOADING</p>}
        {
              pictures.map(fr => {
                //console.log(fr.id)
              return <Pic key={fr.id} info={fr} />
            })
        }
        {
          currentPictureId && <Pictures pictureId={currentPictureId} pictures={pictures} close={closeDetails} />
        }
      </div>
   
    </div>
  );
}

export default App;
