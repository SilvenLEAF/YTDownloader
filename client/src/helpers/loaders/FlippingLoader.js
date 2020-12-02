import '../../styles/loaders/Loader.scss'


import React from 'react'





function FlippingLoader({ title }) {
  return (
    <div className="container myLoaderHolder">
      <div>
        <h3 className="myLoadingTitle"> { title ? title : "Loading..." } </h3>
        <div className="square">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default FlippingLoader
