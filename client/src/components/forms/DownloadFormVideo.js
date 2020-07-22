import './../../styles/Form.css'

import React, { Component } from 'react'
import swal from 'sweetalert';

export class DownloadFormVideo extends Component {
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
    this.setState({
      title: '',
      youtubeUrl: ''
    })

    swal("Downloading", "Your video is downloading. Please wait!","success");

    window.location.href = `/download/mp4?title=${this.state.title}&youtubeUrl=${this.state.youtubeUrl}`
  }
  render() {
    return (
      <div className= "container">
        <form onSubmit= { this.handleSubmit }>
          <div className="input-field">
            <i className="fa fa-youtube-play prefix"></i>
            <input type="text" id="title" name="title" value= { this.state.title } onChange= {this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>

          <div className="input-field">
            <i className="fa fa-link fa-rotate-90 prefix"></i>
            <input type="text" id="youtubeUrl" name="youtubeUrl" value= { this.state.youtubeUrl } onChange= {this.handleChange} required />
            <label htmlFor="youtubeUrl">Youtube URL</label>
          </div>
          
          <div className="input-field">
          <button type="submit" className= "btn waves-effect waves-light" id= "myDownloadBtn">
            <i className="fa fa-download"></i> MP4
          </button>
          </div>
        </form>
      </div>
    )
  }
}

export default DownloadFormVideo
