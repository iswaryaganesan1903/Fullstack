import React from 'react'


const NullRendering = () => {
   let profileImage = null
  return (
    <>
      <div className='flex justify-center items-center h-100'>
        <p className='bg-yellow-200 p-10 h-50 flex  justify-center items-center'>{profileImage ?? "No Image Found"}</p>
      </div>
    </>
  )
}

export default NullRendering