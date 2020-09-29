const ytdl = require('ytdl-core');




module.exports.download_mp3 = (req, res)=>{

  const youtubeUrl = req.query.youtubeUrl;
  const videoTitle = req.query.title || 'SilvenLEAF';

  
  res.header('Content-Disposition', `attachment; filename = ${videoTitle}.mp3`); 

  
  ytdl(youtubeUrl, { filter: 'audioonly' }, {
    format: 'mpeg'
  }).pipe(res)



}









module.exports.download_mp4 = (req, res)=>{

  const youtubeUrl = req.query.youtubeUrl;
  const videoTitle = req.query.title || 'SilvenLEAF';


  res.header('Content-Disposition', `attachment; filename = ${videoTitle}.mp4`);


  ytdl(youtubeUrl, {
    format: 'mp4'
  }).pipe(res);



}