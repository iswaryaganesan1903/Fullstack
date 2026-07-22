import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StringRendering from './components/StringRendering'
import NumberRendering from './components/NumberRendering'
import BooleanRendering from './components/BooleanRendering'
import NullRendering from './components/NullRendering'
import UndefinedRendering from './components/UndefinedRendering'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
         <Route path="/string" element={<StringRendering/>}/>
         <Route path="/number" element={<NumberRendering/>}/>
         <Route path="/boolean" element={<BooleanRendering/>}/>
         <Route path="/null" element={<NullRendering/>}/>
         <Route path="/undefined" element={<UndefinedRendering/>}/>
      </Routes>
    </>
  )
}

export default App