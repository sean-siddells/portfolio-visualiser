import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Home: React.FC = () => (
  <>
    <NavBar />
    <IntroWrapper>
      Hi there! I&apos;m Sean, a budding web developer based in Taamaki Makaurau,
      Aotearoa (Auckland, NZ).
      This site is a collection of my own projects and explorations.
    </IntroWrapper>
  </>
);

const IntroWrapper = styled.div`
  font-family: 'Maghfirea';
  font-size: 4vh;
  margin: 8vh 20vw;
  font-align: center;
`;

export default Home;
