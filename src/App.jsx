import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'

import './App.css'
import { Home, Login, Register } from './components'
import ProductDetail from './components/ProductDetail/ProductDetail'

function App() {

  return (
    <>
    {/*   <h1>Bienvenidos de vuelta a FRONTEND</h1> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:pid' element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
