import React from 'react'
import Sketch from 'p5'
import {draw, setup} from '../../server/public/sketch'

function App () {
  return <Sketch setup={setup} draw={draw} />
}

export default App