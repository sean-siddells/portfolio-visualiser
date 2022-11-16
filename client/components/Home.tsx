import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import WaterVideo from './WaterVideo';

const Home: React.FC = () => (
  <>
    <NavBar />
    <Container>
      <WaterVideo />
      <IntroWrapper>
        Hi there! I&apos;m Sean, a budding web developer based in Taamaki Makaurau,
        Aotearoa (Auckland, NZ).
        This site is a collection of my own projects and explorations.
      </IntroWrapper>
      <WaterVideo />
    </Container>
  </>
);

const IntroWrapper = styled.div`
  font-family: 'Maghfirea';
  font-size: 4vh;
  margin: 8vh 1vw;
  font-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Home;
