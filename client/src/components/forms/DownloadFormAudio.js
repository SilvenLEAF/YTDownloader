import './../../styles/Form.scss'



import React, { Component } from 'react'
import swal from 'sweetalert';


import validateYouTubeURL from './ValidateYouTubeURL';



class DownloadFormAudio extends Component {
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


    const res = validateYouTubeURL(this.state.youtubeUrl);

    if(!res) {
      swal("Invalid URL", "This is not a valid Youtube URL","error");
    } 




    else {
          
      swal("Downloading", "Your video is downloading. Please wait!","success");
      window.location.href = `/download/mp3?title=${this.state.title}&youtubeUrl=${this.state.youtubeUrl}`

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
            <i className="fa fa-youtube-play prefix"></i>
            <input type="text" id="title" name="title" value= { this.state.title } onChange= {this.handleChange} />
            <label htmlFor="title">Title <span className="red-text">(Optional)</span></label>
          </div>






          <div className="input-field">
            <i className="fa fa-link prefix"></i>
            <input type="text" id="youtubeUrl" name="youtubeUrl" value= { this.state.youtubeUrl } onChange= {this.handleChange} required />
            <label htmlFor="youtubeUrl">Youtube URL <span className="red-text">(*required)</span></label>
          </div>
          





          <div className="input-field">
            <button type="submit" className= "btn waves-effect waves-light" id= "myDownloadBtn">
              <i className="fa fa-download"></i> MP3
            </button>

            <span className= "btn waves-effect waves-light blue" style={{ marginLeft: "15px" }} onClick={ ()=> this.setState({ title: '', youtubeUrl: '' }) } >
              <i className="fa fa-paint-brush"></i> Clear
            </span>
          </div>




          
        </form>
      </div>
    )
  }
}

export default DownloadFormAudio
