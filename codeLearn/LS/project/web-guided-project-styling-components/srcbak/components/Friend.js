import React from 'react';
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

export default function Friend({ info, action }) {
  return (
    <StyledFriend>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}