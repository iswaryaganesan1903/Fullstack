import React, { useState } from 'react'

const Login = () => {
  const [val,setVal]=useState(false)
   const buttonClick=()=>{
     
      setVal(true)
   }
  return (
   <>
   <div className='p-10 flex justify-center items-center'>
      <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
        <p className='font-bold'>{val ? 'Welcome User':'Please Login'}</p>
        <button onClick={buttonClick} className='border bg-white px-4 rounded-xl mt-5'>Login</button>
      </div>
   </div>
   </>
  )
}

export default Login