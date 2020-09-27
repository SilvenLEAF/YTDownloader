const validateYouTubeURL = (url)=>{
  if (url != undefined || url != '') {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length == 11) {
        // Do anything for being valid
        return true;
    }
    else {
        // Do anything for not being valid
        return false;
    }
  }
}



export default validateYouTubeURL