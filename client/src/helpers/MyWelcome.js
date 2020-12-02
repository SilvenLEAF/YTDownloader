import '../styles/loaders/Loader.scss'

import BouncingLoader from './loaders/BouncingLoader'
import SpinningLoader from './loaders/SpinningLoader'
import FlippingLoader from './loaders/FlippingLoader'


import React from 'react'





function MyWelcome({ title }) {
  return (
    <>
     <FlippingLoader title={ title } />
    </>
  )
}

export default MyWelcome
