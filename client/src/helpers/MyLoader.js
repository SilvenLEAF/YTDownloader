import '../styles/loaders/Loader.scss'

import BouncingLoader from './loaders/BouncingLoader'
import SpinningLoader from './loaders/SpinningLoader'
import FlippingLoader from './loaders/FlippingLoader'


import React from 'react'





function MyLoader({ title }) {
  return (
    <>
     <SpinningLoader title={ title } />
    </>
  )
}

export default MyLoader
