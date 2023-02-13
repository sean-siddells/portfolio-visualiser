import React from 'react';
import styled from 'styled-components';
import Snake from './Snake';

const ResizableContainer:React.FC = () => (
  <Container>
    <Snake />
  </Container>
);

const Container = styled.div`
  position: relative;
  resize: both;
  overflow: auto;
  border: solid 2px white;
  width: 240px;
  height: 240px;
  z-index: 999;
`;

export default ResizableContainer;
