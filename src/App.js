import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import styled from 'styled-components';

import StartPage from './components/StartPage'
import BattlePage from './components/BattlePage'

const App = () => {
  return (
    <AppComponent>
      <Router>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/battle' element={<BattlePage />} />
        </Routes>
      </Router>
    </AppComponent>
  )
}

export default App

const AppComponent = styled.div`
  background: rgb(255,247,214);
  background: radial-gradient(circle, rgba(255,247,214,1) 0%, rgba(255,204,0,1) 100%);
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
`
