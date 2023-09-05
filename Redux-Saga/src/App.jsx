import React from 'react'
import Main from './Componets/Main'
import Cart from './Redux/Cart'
import Header from './Componets/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
