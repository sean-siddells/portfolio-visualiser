import React from 'react';
import styled from 'styled-components';
import Container from '../constants';
import NavBar from './NavBar';

const Projects: React.FC = () => (
  <Container>
    <NavBar />
    <ProjectWrapper>This is projects</ProjectWrapper>
  </Container>
);

const ProjectWrapper = styled.div`
`;

export default Projects;
