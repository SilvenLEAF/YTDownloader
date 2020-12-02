import './../../styles/Navbar.scss'

import React from 'react'
import { NavLink, Link } from 'react-router-dom'



function Navbar() {
  return (
    <nav className="nav nav-wrapper">
      <div className="container">

        <Link to= "/" className= "brand-logo">YT Downloader</Link>
        <div className="sidenav-trigger hide-on-large-only" data-target= "mobilenav" id="myHam">
          <i className="fas fa-hamburger"></i>
        </div>




        <ul className="sidenav" id="mobilenav">
          <li><NavLink to="/" className="sidenav-close"><i className="fa fa-home"></i>Home</NavLink></li>
          <li><NavLink to="/contact" className="sidenav-close" ><i className="fa fa-envelope"></i>Contact Us</NavLink></li>
          <li><a target="_blank" href="https://silvenleaf.github.io" className="sidenav-close" ><i className="fa fa-rocket"></i>About Me</a></li>
        </ul>





        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><a target="_blank" href="https://silvenleaf.github.io" >About Me</a></li>           
        </ul>



      </div>
    </nav>
  )
}

export default Navbar
