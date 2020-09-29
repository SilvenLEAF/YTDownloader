const validateYouTubeURL = (url)=>{
  if (url != undefined || url != '') {
    const regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
    const playlistRegExp = /playlist\?list/;

    const isPlaylist = url.match(playlistRegExp);
    if(isPlaylist) return "playlist";
    
    
    
    const match = url.match(regExp);
    if (match && match[0].length > 7) {
        // Do anything for being valid
        return "valid";
    }
    else {
        // Do anything for not being valid
        return "invalid";
    }
  } else {
    return false;
  }
}



export default validateYouTubeURL