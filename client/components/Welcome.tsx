import React from 'react';
import styled from 'styled-components';

const Welcome: React.FC = () => (
  <WelcomeWrapper>
    <h1 className="welcome">WELCOME</h1>
  </WelcomeWrapper>
);

const WelcomeWrapper = styled.div`
  z-index: 1;
  margin: 25% 25%;
  padding-left: 5%;
  padding-right: 5%;
  display: block;
  text-align: center;
  position: absolute;
  border: solid 2px black;
  background: white;
  border-radius: 20px;
  box-shadow: 5px 5px #00000085 ;
  font-family: 'Press Start 2P', cursive;
`;
export default Welcome;
