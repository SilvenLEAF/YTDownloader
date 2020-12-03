import './../../styles/Form.scss'



import React, { Component } from 'react'
import swal from 'sweetalert';


import validateYouTubeURL from './ValidateYouTubeURL';



class DownloadFormVideo extends Component {
  state = {
    title: '',
    youtubeUrl: ''
  }






  handleChange = (e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }







  handleSubmit = (e)=>{
    e.preventDefault();

    const isValid = validateYouTubeURL(this.state.youtubeUrl);

    if(isValid === "invalid") {
      swal("Invalid URL", "This is not a valid Youtube URL","error");
    } 
    
    else if(isValid === "playlist") {
      swal("Playlist URL", "This is a Youtube Playlist URL. Give the URL of a single video, NOT a playlist.","error");
    } 




    else {
          
      swal("Downloading", "Your video is downloading. Please wait!","success");
      window.location.href = `/download/mp4?title=${this.state.title}&youtubeUrl=${this.state.youtubeUrl}`

      this.setState({
        title: '',
        youtubeUrl: ''
      })
    }

   


  }













  render() {
    return (
      <div>
  
  

        <form onSubmit= { this.handleSubmit } className="myDefaultForm" >

          <div className="myInputHolder">
            <label htmlFor="youtubeUrl"><i className="fa fa-link"></i> Youtube URL <span className="red-text">(Required)</span></label>
            
            <div>
            <input type="text" id="youtubeUrl" name="youtubeUrl" value= { this.state.youtubeUrl } onChange= {this.handleChange} required placeholder="e.g. https://youtu.be/..." />
            </div>
          </div>







          <div className="myInputHolder">
            <label htmlFor="title"><i className="fab fa-youtube"></i> Title <span className="grey-text">(Optional)</span></label>
            
            <div>
              <input type="text" id="title" name="title" value= { this.state.title } onChange= {this.handleChange} placeholder="e.g. SilvenLEAF" />
            </div>
          </div>



          
          <div className="input-field myBtnsHolder right-align">
            <button type="submit" className= "btn waves-effect waves-light myBtn myCornerless" id= "myDownloadBtn">
              <i className="fa fa-download"></i> Download MP4
            </button>

            <span className= "btn waves-effect waves-light mySecondaryBtn myCornerless" style={{ marginLeft: "15px" }} onClick={ ()=> this.setState({ title: '', youtubeUrl: '' }) } >
              <i className="fa fa-paint-brush"></i> Clear
            </span>
          </div>




          
        </form>
      </div>
    )
  }
}

export default DownloadFormVideo
