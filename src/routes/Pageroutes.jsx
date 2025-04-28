import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Gastropub from '../pages/Gastropub'
import Contactus from '../pages/Contactus'

const Pageroutes = () =>{
  return (
    <>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Menu'element={<Menu/>}/>
        <Route path ='/About' element={<About/>}/>
        <Route path="/Gastropub"element={<Gastropub/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
      </Routes>
    </>
  )
}
export default Pageroutes
