import React from 'react';
import styled from 'styled-components';
import waterVideo from '../../src/public/assets/water.mp4';

const WaterVideo: React.FC = () => (
  <VideoContainer>
    <video autoPlay muted loop>
      <source src={waterVideo} type="video/mp4" />
    </video>
  </VideoContainer>
);

const VideoContainer = styled.div`
  z-index: 0;
  position: absolute;
  top:0;
  display: flex;
  height: ${window.innerHeight - 1}px;
  width: ${window.innerWidth * 0.2}px;
  overflow: hidden;
`;

export default WaterVideo;
