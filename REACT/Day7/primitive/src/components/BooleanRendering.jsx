import React from 'react'

const BooleanRendering = () => {
   let isLogin = true
  return (
    <>
      <div className='flex justify-center items-center h-100'>
        {isLogin? <p className='bg-yellow-200 p-10 h-50 flex  justify-center items-center'>"Welcome User"</p>:<p>"Please Login"</p>}
      </div>
    </>
  )
}

export default BooleanRendering