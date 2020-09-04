import React from 'react'
import './../../styles/Footer.scss'




function Footer(props) {
  return (
    <footer>
      <div className="container">



        <h6 className= "center white-text lighten-5">Developed by SilvenLEAF</h6>


        <div className="my-social-icons-holder">
          <a href="https://twitter.com/SilvenLEAF?s=20" className="my-social-icon"><i className="fa fa-twitter"></i></a>
          <a href="https://github.com/SilvenLEAF" className="my-social-icon"><i className="fa fa-github"></i></a>
          <a href="https://web.telegram.org/#/im?p=@SilvenLEAF" className="my-social-icon"><i className="fa fa-telegram"></i></a>
        </div>


        <div id="my-footer-copyright">
          <div className="center-align">&copy; SilvenLEAF all rights reserved 2020</div>
        </div>



      </div>
    </footer>
  )
}

export default Footer
