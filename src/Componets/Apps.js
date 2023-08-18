import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'
import CakeContainer from './CakeContainer/CakeContainer'

const Apps = () => {
  return (
    <>
        <Provider store={store}>
            <CakeContainer/>
        </Provider>
    </>
  )
}

export default Apps
