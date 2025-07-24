import React from 'react'
import './Navbar.css'
import logo from "./../assets/Logo.png"
const Navbar = () => {
  return (
    <nav>
        <div className="logo-and-name-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="name">
                <p>It once caught my eye</p>
            </div>
        </div>
        <div className="nav-items">

            <div className="portfolio">
                Portfolio
            </div>
            <div className="welcome">
                Welcome
            </div>
            <div className="about">
                About
            </div>
            <div className="achievements">
                Acievements
            </div>
            <div className="shop">
                Shop
            </div>
        </div>
    </nav>
  )
}

export default Navbar