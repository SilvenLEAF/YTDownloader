const express = require('express');
const path = require('path');




// ------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));








/* --------------------------------------
.               routes
-------------------------------------- */
app.use('/download', require('./routes/downloadRoutes'));
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
