import React from 'react';
import Sketch, { SketchProps } from 'react-p5';
import styled from 'styled-components';

const Visualiser: React.FC = () => {
  const randomInt = (min: number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

  let r = 100;
  let g = randomInt(100, 200);
  let b = randomInt(100, 256);

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  function pickColour() {
    r = 100;
    g = randomInt(100, 200);
    b = randomInt(100, 256);
  }

  let x = randomInt(0, (windowWidth - 80));
  let y = randomInt(0, (windowHeight - 60));
  let xSpeed = 3;
  let ySpeed = 4;

  const setup: SketchProps['setup'] = (p5, canvasParentRef): void => {
    pickColour();
    p5.createCanvas(windowWidth, windowHeight - 1).parent(canvasParentRef);
  };

  const draw: SketchProps['draw'] = (p5) : void => {
    // * no trail
    // p5.background('white')

    // * no box outline
    // noStroke()

    const c = p5.color(r, g, b);
    p5.fill(c);
    p5.rect(x, y, windowWidth / 20, windowWidth / 35, 15);
    x += xSpeed;
    y += ySpeed;
    // rainbow colors
    pickColour();
    if (x + windowWidth / 20 >= windowWidth) {
      xSpeed = -xSpeed;
      pickColour();
    } else if (x <= 0) {
      xSpeed = -xSpeed;
      x = 0;
      pickColour();
    }

    if (y + windowWidth / 35 >= windowHeight) {
      ySpeed = -ySpeed;
      pickColour();
    } else if (y <= 0) {
      ySpeed = -ySpeed;
      y = 0;
      pickColour();
    }
  };

  return <StyledSketch setup={setup} draw={draw} />;
};

const StyledSketch = styled(Sketch)`
  position: absolute;
`;

export default Visualiser;
