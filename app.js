const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();



// Serve static files from the React App
app.use(express.static(path.join(__dirname, 'client/build')));



/* --------------------------------------
.               middlewares
-------------------------------------- */
app.use(bodyParser.json());

// -----------routes handling
app.use('/download', require('./routes/download-routes'));
/* The "catchall" handler: for any request
that doesn't match one above, send back
React's index.html file. */
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname,'client/build/index.html'));
});



// ------------LISTEN--------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})
