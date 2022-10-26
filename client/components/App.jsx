import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

function App () {
  return (
    <div className="app">
      <Outlet />
    </div>
  )
}

export default App