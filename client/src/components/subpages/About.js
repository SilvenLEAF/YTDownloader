import M from 'materialize-css'
import './../../styles/About.scss'




import React, { Component } from 'react'







class About extends Component {  
  componentDidMount() {
    M.AutoInit();
  }  









  render() {
    return (
      <div className="container myAboutUsPage">
  
  
        <div id="myProfileIcon"></div>

        <h3>SilvenLEAF</h3>

        <p className="myMainInfo">
          A CRAZY LOVER of Full-STACK ENGINEERING, aiming to be my CRAZIEST Version!!! Wanna create CRAZIEST things and change the ENTIRE WORLD!!! GOOGLE, Here I come!!!
        </p>



        <p>
          Born on 31st December of 2001, I'm a self-taught Fullstack Developer (esp. MERN Stack) from Kameswar, Dharmanagar, North Tripura, North-East India, who specializes in---------  
          <span className="mySkills">
            JavaScript, NodeJS, ExpressJS, PassportJS, oauth2.0, MongoDB, React, Redux, GraphQL, Socket.io, PWA, HTML5, CSS3. 
          </span>          
        </p>


        <p>
          I'm also comfortable with using <strong>git, basic cli</strong> and <strong>chrome-dev-tools</strong>, and also with deployment on <strong>Heroku</strong>. <strong>
            I can  create APIs, add OAUTH, manage Role-Based-Auth, do CRUD, make webapps and websites (also usable offline) and many many many more.....
          </strong>
        </p>


        <p>
          I'm an <strong>all-time learner</strong>, constantly learning and evolving, <strong>love challenges</strong>, highly <strong>obsessed with Fullstack</strong> Engeneering.
        </p>




      </div>
    )
  }
}

export default About
