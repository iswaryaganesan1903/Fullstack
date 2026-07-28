import React from 'react'


const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center p-5'>
       
        <h2 className='text-2xl font-bold'><span className='text-black'>News</span><span className='text-red-600'>Daily</span></h2>
        <div className='flex gap-3'>
            <input type="text" placeholder='Search ' className='border rounded-full bg-gray-50 w-50 p-2' />
            <a href="#" className='bg-red-600 px-5 py-2 rounded-md text-white'>Login</a>
        </div>
        
       
    </div>
   
    </>
  )
}

export default Navbar