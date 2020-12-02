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
      <div className= "container">
  
  
  
        <form onSubmit= { this.handleSubmit }>
          <div className="input-field">
            <i className="fab fa-youtube prefix"></i>
            <input type="text" id="title" name="title" value= { this.state.title } onChange= {this.handleChange} />
            <label htmlFor="title">Title <span className="red-text">(Optional)</span></label>
          </div>





          <div className="input-field">
            <i className="fa fa-link prefix"></i>
            <input type="text" id="youtubeUrl" name="youtubeUrl" value= { this.state.youtubeUrl } onChange= {this.handleChange} required />
            <label htmlFor="youtubeUrl">Youtube URL <span className="red-text">(*required)</span></label>
          </div> 







          <div className="input-field myBtnsHolder right-align">
            <button type="submit" className= "btn myBtn waves-effect waves-light myCornerless" id= "myDownloadBtn">
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
