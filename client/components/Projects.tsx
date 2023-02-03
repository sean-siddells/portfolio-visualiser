import React from 'react';
import { Container, ContentWrapper } from '../constants';
import NavBar from './NavBar';

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
    </ContentWrapper>
  </Container>
);

export default Projects;
