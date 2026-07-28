import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Technology from './components/Technology'
import India from './components/India'
import Newscard from './components/Newscard'
import ShareMarket from './components/ShareMarket'
import Sports from './components/Sports'
import News3 from './components/News3'
import News2 from './components/News2'
import News1 from './components/News1'
import News4 from './components/News4'

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
         <Route path="/technology1" element={<News1/>} />
        <Route path="/technology2" element={<News2/>} />
        <Route path="/technology3" element={<News3/>} />
         <Route path="/technology4" element={<News4/>} />
    </Routes>
    </>
  )
}

export default App