import React from 'react'

const StudentCard = ({name,age,course,status}) => {
   
  return (
   <>
    <div className='p-10 flex'>
       <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
        <p className='text-center'>Task1</p>
        <p><strong>Name:</strong>{name}</p>
        <p><strong>Age:</strong>{age}</p>
        <p><strong>Course:</strong>{course}</p>
        <p><strong>isStatus:</strong>{status}</p>
       </div>
    </div>
   </>
  )
}

export default StudentCard