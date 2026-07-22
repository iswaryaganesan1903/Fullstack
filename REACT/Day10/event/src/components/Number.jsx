import React, { useState } from 'react'

const Number = () => {

     const [count,setCount]=useState(0)
       const buttonClick=()=>{
         
          setCount(count+1)
       }
      return (
       <>
       <div className='p-10 flex justify-center items-center'>
          <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
            <p className='font-bold'>{count}</p>
            <button onClick={buttonClick} className='border bg-white px-4 rounded-xl mt-5'>Increase</button>
          </div>
       </div>
       </>
      )
    
}

export default Number