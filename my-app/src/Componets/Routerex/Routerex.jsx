import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contct from './Contct'
import Error from './Error'
import Feature from './Feature'
import New from './New'
const Routerex = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contact' element={<Contct/>}/>
                <Route path='/Error' element={<Error/>}/>
                <Route >
                  <Route path='Feature' element={<Feature/>} />
                  <Route path='new' element={<New/>} />
                </Route>
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routerex
