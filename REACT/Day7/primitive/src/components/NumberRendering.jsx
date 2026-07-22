import React from 'react'

const NumberRendering = () => {
    const price = 50000
    const discount = 5000
  return (
   <>
      <div className='flex justify-center items-center h-100'>
          <div className='bg-yellow-200 p-10 h-50 flex flex-col justify-center items-center'>
              <p>Price:{price}</p>
              <p>Discount:{discount}</p>
          </div>
      </div>
   </>
  )
}

export default NumberRendering