import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'
import CakeContainer from './CakeContainer/CakeContainer'
import Hookcontainer from './CakeContainer/Hookcontainer'

const Apps = () => {
  return (
    <>
        <Provider store={store}>
            <CakeContainer/>
            <Hookcontainer/>
        </Provider>
    </>
  )
}

export default Apps
