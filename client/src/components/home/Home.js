import React from 'react'
import './../../styles/Home.css'
import DownloadFormAudio from '../forms/DownloadFormAudio'
import DownloadFormVideo from '../forms/DownloadFormVideo'


function Home() {
  return (
    <div className="container">
      <div id="myHeroHolder">
        <img src="/images/InLove.svg" alt="" id= "myHero" />
        <h3 className= "red-text center-align" id= "myHeroTitle"><i className="fa fa-youtube"></i> <span>Download</span></h3>
      </div>    

      <div className="row">
        <div className="col s12">
          
          <ul className="tabs">
            <li className="tab col s6">
              <a href="#myMp3">Mp3 Download</a>
            </li>
            <li className="tab col s6">
              <a href="#myMp4">Mp4 Download</a>
            </li>
          </ul>

          <div className="col s12" id="myMp3">
            <DownloadFormAudio/>
          </div>

          <div className="col s12" id="myMp4">
            <DownloadFormVideo/>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
