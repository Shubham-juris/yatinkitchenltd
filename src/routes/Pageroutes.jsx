import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import About from '../pages/About'

const Pageroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Menu'element={<Menu/>}/>
        <Route path ='/About' element={<About/>}/>

      </Routes>
    </>
  )
}

export default Pageroutes
