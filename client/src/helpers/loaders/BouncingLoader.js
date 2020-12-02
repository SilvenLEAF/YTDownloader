import '../../styles/loaders/Loader.scss'


import React from 'react'





function BouncingLoader({ title }) {
  return (
    <div className="container myLoaderHolder">
      <div>
        <div class="bouncer">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="myLoadingTitle"> { title ? title : "Loading..." } </h3>
      </div>
    </div>
  )
}

export default BouncingLoader
