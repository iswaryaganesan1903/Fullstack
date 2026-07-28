import React from 'react'
import { Link } from 'react-router-dom'

const Newscard = () => {
  return (
   <>
    <div>
        <div className=' bg-black text-white'>
            <div className='ml-3 flex gap-20 p-2'>
                <Link to="/">Home</Link>
                <Link to="/tech">Technology</Link>
                <Link to="/india">India</Link>
                <Link to="/share">Share Market</Link>
                <Link to="/sports">Sports</Link>
            </div>
            
        </div>
    </div>
   
   </>
  )
}

export default Newscard