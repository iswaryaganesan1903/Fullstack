import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./Header";
import Navbar from "./Navbar";
import Form from "./Form";
import Table from "./Table";
import Card from "./Card"

function App() {


  return (
    <>
      <p>Welcome To React JS</p>
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <Form />
      </div>
      <div className="container">
        <Table />
      </div>
      
    </>
  )
}

export default App
