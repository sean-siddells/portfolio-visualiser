import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Projects: React.FC = () => (
  <>
    <NavBar />
    <ProjectWrapper>This is projects</ProjectWrapper>
  </>
);

const ProjectWrapper = styled.div`
`;

export default Projects;
