import '../../styles/loaders/Loader.scss'


import React from 'react'





function SpinningLoader({ title }) {
  return (
    <div className="container myLoaderHolder">
      <div>
        <h3 className="myLoadingTitle"> { title ? title : "Loading..." } </h3>
        <div class="spinner">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default SpinningLoader
