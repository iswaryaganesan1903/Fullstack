import React from 'react'
import Image from './assets/profile.png'
import './App.css'

const App = () => {
  return (
    <>
      <div className='page'>
        <div className='card'>
          <img src={Image} alt="" className='profileImg' />
          <p><strong>Name:</strong>Iswarya</p>
          <p><strong>Role:</strong>Java developer</p>
        </div>
      </div>
    </>
  )
}

export default App