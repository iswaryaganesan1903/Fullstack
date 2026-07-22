import React, { useState } from 'react'

const Company = () => {
   const [company,setCompany]=useState("JavaScript")
           const buttonClick=()=>{
             
              setCompany("React JS")
           }
          return (
           <>
           <div className='p-10 flex justify-center items-center'>
              <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
                <p className='font-bold'>{company}</p>
                <button onClick={buttonClick} className='border bg-white px-4 rounded-xl mt-5'>Update Course</button>
              </div>
           </div>
           </>
          )
}

export default Company