// Write your Character component here

import React from 'react';
// import './App.css';
//import Details from './Detail'
import styled from 'styled-components';



const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid red;
`


// const Characters = (info, action ) => {
function Characters (props) {
    const { info,  action} = props

    console.log("Characters info ="+info.id)
    return (
        
         <StyledFriend>
            {info.name} ## {info.id}
           
            <button onClick={() => action(info.id)}>
            {info.birth_year}
                {/* See details   */}
            </button>
            {/* <Details /> */}
        </StyledFriend>
        

    )
  }

  export default Characters;