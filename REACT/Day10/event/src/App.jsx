import React, { useState } from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Number from './components/Number'
import Name from './components/Name'
import Theme from './components/Theme'
import Company from './components/Company'

const App = () => {
   return(
      <>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Number/>}/>
         <Route path="/name"  element={<Name/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path='/theme' element={<Theme/>}/>
         <Route path='/company' element={<Company/>}/>
      </Routes>
      </>
   )
}

export default App