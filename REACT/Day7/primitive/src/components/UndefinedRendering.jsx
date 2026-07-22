import React from 'react'

const UndefinedRendering = () => {
    let email = undefined
  return (
   <>
    <div className='flex justify-center items-center h-100'>
        <p  className='bg-yellow-200 p-10 h-50 flex  justify-center items-center'> {email ?? "Email Not Available"}</p>
    </div>
   </>
  )
}

export default UndefinedRendering