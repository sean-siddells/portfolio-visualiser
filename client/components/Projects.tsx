import React from 'react';
import { Container, ContentWrapper, Spacer } from '../constants';
import NavBar from './NavBar';
import Visualiser from './Visualiser';

const Projects: React.FC = () => (
  <Container>
    <NavBar />
    <ContentWrapper>
      <h2>Git Gud</h2>

      This was my final project at Dev Academy - a 2D sidescrolling platformer game that myself
      and three friends made in a week!
      There are five unique level designs with original music made by either me or friends of ours.
      We were very proud of what we achieved in such a small
      amount of time - learning the basics of Phaser3.js and the workflow of game development was
      a rewarding challenge.

      <h2>Trail dvd visualiser</h2>

      The landing page for this site was a toy project inspired by the classic
      dvd visualiser and was made using p5.js.
      <Spacer />
      <Container>
        <Visualiser mini />
      </Container>
    </ContentWrapper>
  </Container>
);

export default Projects;
