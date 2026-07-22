import React from 'react'

const Student = (props) => {
    const {studentDetail}=props
  return (
    <>
    <div className='p-10 flex justify-center items-center'>
        <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
            <p>{studentDetail.name}</p>
            <p>{studentDetail.age}</p>
            <p>{studentDetail.course}</p>
        </div>
    </div>
    </>
  )
}

export default Student