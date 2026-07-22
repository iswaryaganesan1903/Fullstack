import React, { useState } from 'react'

const Name = () => {
   const [name,setName]=useState("Iswarya")
         const buttonClick=()=>{
           
            setName("Iswaryaganesan")
         }
        return (
         <>
         <div className='p-10 flex justify-center items-center'>
            <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
              <p className='font-bold'>{name}</p>
              <button onClick={buttonClick} className='border bg-white px-4 rounded-xl mt-5'>Change Name</button>
            </div>
         </div>
         </>
        )
}

export default Name