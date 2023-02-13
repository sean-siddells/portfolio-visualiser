import React, {
  useState,
} from 'react';
import Sketch, { SketchProps } from 'react-p5';
import styled from 'styled-components';
import { Container } from '../constants';

const canvasWidth = 240;
const canvasHeight = 240;

const Snake: React.FC = () => {
  const [rainbow, setRainbow] = useState(false);
  const [trail, setTrail] = useState(false);
  const [smooth, setSmooth] = useState(false);

  const randomInt = (min: number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

  let r = 100;
  let g = randomInt(100, 200);
  let b = randomInt(100, 256);

  function pickColour() {
    r = 150;
    g = randomInt(0, 256);
    b = randomInt(0, 256);
  }

  let x = randomInt(0, (canvasWidth - 80));
  let y = randomInt(0, (canvasHeight - 60));
  let xSpeed = 1;
  let ySpeed = 1.5;

  const setup: SketchProps['setup'] = (p5, canvasParentRef) => {
    pickColour();
    p5.createCanvas(240, 240).parent(canvasParentRef);
  };

  const draw: SketchProps['draw'] = (p5) => {
    if (!trail) p5.background('#eae7e3');
    if (smooth) p5.noStroke();
    if (rainbow) pickColour();

    const c = p5.color(r, g, b);
    p5.fill(c);
    p5.rect(x, y, 16, 16, 15);
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

  return (
    <Container>
      <Button type="button" onClick={() => setTrail(!trail)}>trail</Button>
      <Button type="button" onClick={() => setRainbow(!rainbow)}>rainbow</Button>
      <Button type="button" onClick={() => setSmooth(!smooth)}>smooth</Button>
      <Container>
        <StyledSketch setup={setup} draw={draw} />
      </Container>
    </Container>
  );
};

const StyledSketch = styled(Sketch)`
  display: flex;
  position: absolute;
  border: solid 2px white;
`;

const Button = styled.button`
  position: relative;
  z-index: 1
`;

export default Snake;
