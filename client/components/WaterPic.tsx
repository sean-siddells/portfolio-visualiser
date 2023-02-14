import React from 'react';
import styled from 'styled-components';
import waterPic from '../../src/public/assets/rocky_water.JPG';

const WaterPic: React.FC = () => (
  <PicContainer>
    <img src={waterPic} alt="water" />
  </PicContainer>
);

const PicContainer = styled.div`
  z-index: 0;
  position: absolute;
  top:0;
  display: flex;
  height: ${window.innerHeight - 1}px;
  width: ${window.innerWidth * 0.2}px;
  overflow: hidden;
`;

export default WaterPic;
