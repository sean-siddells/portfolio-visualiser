import React from 'react'
import Sketch from 'react-p5'

const Visualiser = () => {
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let r
  let g
  let b

  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  function pickColour() {
    r = 100
    g = randomInt(100, 200)
    b = randomInt(100, 256)
  }

  let x = randomInt(0, (windowWidth - 80))
  let y = randomInt(0, (windowHeight - 60))
  // let x = 0
  // let y= 0
  let xSpeed = 4
  let ySpeed = 3

  const setup = (p5, canvasParentRef) => {
    // pickColour()
    p5.createCanvas(windowWidth, windowHeight - 1).parent(canvasParentRef)
  }

  const draw = (p5) => {
    // * no trail
    // p5.background('white')
    // * no box outline
    // noStroke()
    p5.rect(x, y, windowWidth/20, windowWidth/35, 15)
    let c = p5.color(r, g, b)
    p5.fill(c)
    x = x + xSpeed
    y = y + ySpeed
    // rainbow colors
    pickColour()
    if (x + windowWidth/20 >= windowWidth) {
      xSpeed = -xSpeed
      pickColour()
    } else if (x <= 0) {
      xSpeed = -xSpeed
      x= 0
      pickColour()
    }

    if (y + windowWidth/35 >= windowHeight) {
      ySpeed = -ySpeed
      pickColour()
    } else if (y <= 0) {
      ySpeed= -ySpeed
      y= 0
      pickColour()
    }
  }

  return <Sketch setup={setup} draw={draw} />
}

export default Visualiser
