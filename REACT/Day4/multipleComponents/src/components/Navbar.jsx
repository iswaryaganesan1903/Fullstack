import React from 'react'

const Navbar = () => {
  return (
   <>
     <div className='flex justify-between p-5 bg-amber-100'>
        <Logo/>
         <div className='flex gap-5'>
            <a href="">home</a>
            <a href="">about</a>
            <a href="">contact</a>
            <a href="">help</a>
         </div>
         
      </div>
   </>
  )
}

export default Navbar

const Logo=()=>{
    return(
        <>
        <div className='bg-amber-200 h-10 w-15 rounded-2xl text-center flex items-center justify-center'>
            Logo
        </div>
        </>
    )
}