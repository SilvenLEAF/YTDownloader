const chalk = require('chalk');

if(process.env.NODE_ENV !== 'production'){
  // if we are on development, load development environmental variables
  require('dotenv').config()
}




const express = require('express');
const path = require('path');




// ------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));








/* --------------------------------------
.               routes
-------------------------------------- */
app.use('/download', require('./routes/downloadRoutes'));
/* The "catchall" handler: for any request
that doesn't match one above, send back
React's index.html file. */

app.use(require('./routes/ContactRoute'));


app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname,'client/build/index.html'));
});



// ERRORS HANDLER
app.use((err, req, res, next)=>{
  console.log(chalk.red(err.message));

  console.log(err);
  res.json({ msg: `Server error`, error: err.message })
});







// ------------LISTEN--------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})
