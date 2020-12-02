const nodemailer = require('nodemailer');



module.exports.users_contact_me_to_my_email_from_the_frontEND_form = async (req, res, next)=>{
  try {
    const { title, content } = req.body;
  



    // creating my Postman  who will deliver the email for me
    const smtpTransport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: `noreplyleaf@gmail.com`, //my backend will send the email from this account
        pass: process.env.GMAIL_PASSWORD
      }
    });






    // defining the content of the email (I mean what will be on the email)
    const mailOptions = {
      to: 'appsofleaf@gmail.com',
      from: 'noreplyleaf@gmail.com',

      subject: title,
      text: content
    }





    
    // sending the mail to the my email account
    smtpTransport.sendMail(mailOptions, (err)=>{
      if(err) {
        next(err, req, res);
      } else {
        console.log(`Email sent to my account. User contacted!`);

      res.json({ msg: `Your message is sent. Thanks for contacting!` })
      }

    
    })

  
  } catch (err) {
    next(err, req, res);
  } 
}
