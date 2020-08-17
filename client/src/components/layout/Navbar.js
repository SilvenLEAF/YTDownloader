import './../../styles/Navbar.css'

import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav nav-wrapper">
     <div className="container">
     <Link to= "/" className= "brand-logo">YT Downloader</Link>
      <div className="sidenav-trigger hide-on-large-only" data-target= "mobilenav" id="myHam">
          <div className="t"></div>   
          <div className="m"></div>
          <div className="b"></div>
      </div>

      <ul className="sidenav" id="mobilenav">
        <li><NavLink to="/"><i className="fa fa-home"></i>Home</NavLink></li>
        <li><NavLink to="/contact"><i className="fa fa-envelope"></i>Contact Us</NavLink></li>
        <li><NavLink to="/about"><i className="fa fa-rocket"></i>About Us</NavLink></li>
      </ul>

      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
      </ul>
     </div>
    </nav>
  )
}

export default Navbar
