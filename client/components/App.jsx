import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Visualiser from './Visualiser'
import Welcome from './Welcome'
import styled from 'styled-components'

const App = () => {
  return (
    <Container>
      <Visualiser />
      <Welcome />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

export default App