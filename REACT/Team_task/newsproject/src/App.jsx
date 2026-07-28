import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Technology from './components/Technology'
import India from './components/India'
import Newscard from './components/Newscard'
import ShareMarket from './components/ShareMarket'
import Sports from './components/Sports'

const App = () => {
  return (
    <>
    <Navbar/>
    <Newscard/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tech" element={<Technology/>}/>
        <Route path="/india" element={<India/>}/>  
        <Route path='/share' element={<ShareMarket/>}/> 
        <Route path="/sports" element={<Sports/>}/>
    </Routes>
    </>
  )
}

export default App