import React from 'react'
import Visualiser from './Visualiser'
import Welcome from './Welcome'
import styled from 'styled-components'

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Visualiser/>
      <Welcome/>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

export default LandingPage