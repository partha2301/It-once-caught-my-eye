import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Welcome from './components/Welcome.jsx'
import EnterPortfoliio from './components/EnterPortfolio'

function App() {
  return (
    <>
      <Navbar/>
      <Welcome/>
      <EnterPortfoliio/>
    </>
  )
}

export default App
