import React from 'react';
import styled from 'styled-components';
import waterVideo from '../../src/public/assets/water.mp4';

const WaterVideo: React.FC = () => (
  <VideoContainer autoPlay muted loop>
    <source src={waterVideo} type="video/mp4" />
  </VideoContainer>
);

const VideoContainer = styled.video`
  z-index: 0;
  position: relative;
  top:0;
  display: flex;
  height: ${window.innerHeight}px;
`;

export default WaterVideo;
