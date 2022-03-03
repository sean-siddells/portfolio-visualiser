let x
let y

let xspeed
let yspeed

let r, g, b

function setup() {
  createCanvas(windowWidth, windowHeight)
  x= random(width - 80)
  y= random(height - 60)
  xspeed= 3
  yspeed= 3
  pickColour()
}

function pickColour() {
  r = random(100, 256)
  g = random(100, 256)
  b = random(100, 256)
}

function draw() {
  rect(x, y, windowWidth/20, windowWidth/35, 15)
  let c = color(r, g, b)
  fill(c)
  x = x + xspeed
  y = y + yspeed

  if (x + windowWidth/20 >= width) {
    xspeed = -xspeed
    pickColour()
  } else if (x <= 0) {
    xspeed = -xspeed
    x= 0
    pickColour()
  }

  if (y + windowWidth/35 >= height) {
    yspeed = -yspeed
    pickColour()
  } else if (y <= 0) {
    yspeed= -yspeed
    y= 0
    pickColour()
  }
}

module.exports = {
  draw,
  setup,

}