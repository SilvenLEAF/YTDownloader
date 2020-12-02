import React from 'react'
import './../../styles/Footer.scss'





function Footer(props) {
  return (
    <div id="myFooter">
      <div className="container">



        <h6 className= "center white-text lighten-5">Developed by SilvenLEAF</h6>


        <div className="mySocialIconsHolder">
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SilvenLEAF?s=20" className="mySocialIcon"><i className="fab fa-twitter"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/SilvenLEAF" className="mySocialIcon"><i className="fab fa-github"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/silvenleaf/" className="mySocialIcon"><i className="fab fa-linkedin"></i></a>
        </div>


        <div id="myFooterCopyright">
          <div className="center-align">&copy; SilvenLEAF all rights reserved 2020</div>
        </div>



      </div>
    </div>
  )
}

export default Footer
