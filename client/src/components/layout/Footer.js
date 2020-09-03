import React from 'react'
import './../../styles/Footer.scss'




function Footer(props) {
  return (
    <footer>
      <div className="container">



        <h6 className= "center white-text lighten-5">Developed by SilvenLEAF</h6>


        <div className="my-social-icons-holder">
          <span className="my-social-icon"><i className="fa fa-github"></i></span>
          <span className="my-social-icon"><i className="fa fa-instagram"></i></span>
          <span className="my-social-icon"><i className="fa fa-youtube-play"></i></span>
        </div>


        <div id="my-footer-copyright">
          <div className="center-align">&copy; SilvenLEAF all rights reserved 2020</div>
        </div>



      </div>
    </footer>
  )
}

export default Footer
