import React from 'react'

const StudentList = (values) => {
    const {List}=values
    console.log(List);
    
  return (
    <>
   <div className="flex flex-wrap justify-center gap-6 p-6">
        {List.map((e,i)=>(
          <div key={i+1} className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
             <p><strong>Id:</strong>{e.id}</p>
             <p><strong>Name:</strong>{e.name}</p>
             <p><strong>Course:</strong>{e.course}</p>
       </div>
        ))}
    </div>
    
    </>
  )
}

export default StudentList