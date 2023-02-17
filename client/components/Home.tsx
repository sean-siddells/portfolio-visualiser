import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import { Container } from '../constants';

const Home: React.FC = () => (
  <Container>
    <NavBar />
    <IntroWrapper>
      Hi there! I&apos;m Sean, a budding web developer based in Taamaki Makaurau,
      Aotearoa (Auckland, NZ).
      This site is a collection of my personal projects and explorations.
    </IntroWrapper>
  </Container>

);

export const IntroWrapper = styled.div`
  position: relative;
  font-family: 'DisketMono';
  font-size: 1.5vw;
  padding: 8vh 8vw;
  width: ${window.innerWidth * 0.8}px;
`;

export default Home;
