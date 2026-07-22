import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className='p-10 bg-red-300 flex justify-between items-center'>
        <div className='mx-10 '>
           Logo
        </div>
        <div className='mx-10 flex gap-10'>
            <Link to="/string" className='hover:underline'>String Rendering</Link> 
            <Link to="/number" className='hover:underline'>Number Rendering</Link>
            <Link to="/boolean" className='hover:underline'>Boolean Rendering</Link>
            <Link to="/null" className='hover:underline'>Null Rendering</Link>
            <Link to="/undefined" className='hover:underline'>Undefined Rendering</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar