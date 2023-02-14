import React, { useState } from 'react';
import Sketch, { SketchProps } from 'react-p5';
import styled from 'styled-components';
import { Container } from '../constants';

interface VisualiserProps {
  mini: boolean
}

const Visualiser: React.FC<VisualiserProps> = ({ mini }) => {
  const miniWidth = 480;
  const miniHeight = 240;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const canvasWidth = mini ? miniWidth : windowWidth;
  const canvasHeight = mini ? miniHeight : windowHeight;

  const [rainbow, setRainbow] = useState(false);
  const [trail, setTrail] = useState(false);
  const [smooth, setSmooth] = useState(false);

  const randomInt = (min: number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

  let r = 100;
  let g = randomInt(100, 200);
  let b = randomInt(100, 256);

  function pickColour() {
    r = 150;
    g = randomInt(100, 200);
    b = randomInt(100, 256);
  }

  let x = randomInt(0, canvasWidth - 80);
  let y = randomInt(0, canvasHeight - 60);
  let xSpeed = mini ? 1 : 3;
  let ySpeed = mini ? 1.5 : 4;

  const setup: SketchProps['setup'] = (p5, canvasParentRef) => {
    pickColour();
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };

  const draw: SketchProps['draw'] = (p5) => {
    if (mini) {
      if (smooth) p5.noStroke();
      if (!trail) p5.background('#eae7e3');
      if (rainbow) pickColour();
    }

    const c = p5.color(r, g, b);
    p5.fill(c);
    p5.rect(x, y, (mini ? 16 : windowWidth / 20), (mini ? 16 : windowWidth / 35), 15);
    x += xSpeed;
    y += ySpeed;

    if (x + canvasWidth / 20 >= canvasWidth) {
      xSpeed = -xSpeed;
      pickColour();
    } else if (x <= 0) {
      xSpeed = -xSpeed;
      x = 0;
      pickColour();
    }

    if (y + canvasWidth / 35 >= canvasHeight) {
      ySpeed = -ySpeed;
      pickColour();
    } else if (y <= 0) {
      ySpeed = -ySpeed;
      y = 0;
      pickColour();
    }
  };

  return mini
    ? (
      <>
        <ButtonContainer>
          <Button type="button" onClick={() => setTrail(!trail)} style={{ backgroundColor: trail ? 'lightblue' : 'white' }}>trail</Button>
          <Button type="button" onClick={() => setRainbow(!rainbow)} style={{ backgroundColor: rainbow ? 'lightblue' : 'white' }}>rainbow</Button>
          <Button type="button" onClick={() => setSmooth(!smooth)} style={{ backgroundColor: smooth ? 'lightblue' : 'white' }}>smooth</Button>
        </ButtonContainer>
        <Container>
          <MiniSketch setup={setup} draw={draw} />
        </Container>
      </>
    )
    : <StyledSketch setup={setup} draw={draw} />;
};

const StyledSketch = styled(Sketch)`
  position: absolute;
`;

const Button = styled.button`
  position: relative;
  z-index: 1
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 8px;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 8px;
`;

const MiniSketch = styled(Sketch)`
  display: flex;
  position: absolute;
  border: solid 2px white;
`;

export default Visualiser;
