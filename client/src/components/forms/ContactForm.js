import M from 'materialize-css'
import './../../styles/Form.scss'



import React, { Component } from 'react'
import swal from 'sweetalert';










class ContactForm extends Component {
  componentDidMount() {
    M.AutoInit();
  }








  handleSubmit = (e)=>{
    e.preventDefault();
  
  
  
    const myContactTitle = document.querySelector('#myContactTitle');
    const myContactContent = document.querySelector('#myContactContent');




    myContactTitle.value= '';
    myContactContent.value= '';
    swal("Sent", "Your message is sent. Thanks for contacting!","success");    
  }








  render() {
    return (
      <div className= "container">
  
  
  
        <form onSubmit= { this.handleSubmit } id="myContactForm">
          <h2>Contact Us</h2>
  


  
  
  
          <div className="input-field">            
            <input type="text" name="contactTitle" id= "myContactTitle" required />
            <label htmlFor="contactTitle">Title <span className="red-text">(*required)</span></label>
          </div>

  
  
  
  
  
  
          <div className="input-field">            
            <textarea name="content" className= "materialize-textarea" id= "myContactContent" required ></textarea>            
            <label htmlFor="content">Content <span className="red-text">(*required)</span></label>
          </div>






          <div className="input-field">
            <button type="submit" className= "btn waves-effect waves-light" id= "myDownloadBtn">
              <i className="fa fa-send"></i> Send
            </button>
          </div>




          
        </form>
      </div>
    )
  }
}

export default ContactForm
