import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Welcome from './components/Welcome.jsx'
import EnterPortfoliio from './components/EnterPortfolio'
import Portfolio2 from './components/Portfolio2'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <Welcome/>
      <EnterPortfoliio/>
      <Portfolio2/>
      <Highlights/>
      <Footer/>
    </>
  )
}

export default App
