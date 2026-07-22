import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='p-10 bg-red-300 flex justify-between items-center'>
            <div className='mx-10'>
               Logo
            </div>
            <div className='mx-10 flex gap-10'>
                <Link to="/">Student</Link> 
                <Link to="/employee" >Employee</Link>
                <Link to="/product" >Product</Link>
                <Link to="/movie" >Movie</Link>
                <Link to="/studentlist">StudentList</Link>
            </div>
        </div>
        
    </>
  )
}

export default Navbar