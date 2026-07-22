import React from 'react'

const StringRendaering = () => {
     const course = "React JS"
  return (
    <>
      <div className='flex justify-center items-center h-100'>
          <h2 className='bg-yellow-200 p-10 h-50 flex text-2xl justify-center items-center'>Course:{course}</h2>
      </div>
    </>
  )
}

export default StringRendaering