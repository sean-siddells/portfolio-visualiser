import React from 'react';
import styled from 'styled-components';
import Visualiser from './Visualiser';
import Welcome from './Welcome';

const LandingPage: React.FC = () => (
  <Container>
    <Visualiser />
    <Welcome />
  </Container>
);

const Container = styled.div`
  position: relative;
`;

export default LandingPage;
