import M from 'materialize-css'
import './../../styles/About.scss'




import React, { Component } from 'react'







class About extends Component {  
  componentDidMount() {
    M.AutoInit();
  }  









  render() {
    return (
      <div className="container">
  
  
        <div id="myProfileIcon"></div>



        <p>
          A CRAZY LOVER of Full-STACK ENGINEERING, aiming to be my CRAZIEST Version!!! Wanna create CRAZIEST things and change the ENTIRE WORLD!!! GOOGLE, Here I come!!!
        </p>






      </div>
    )
  }
}

export default About
