import React from 'react'

const Employee = (emp) => {
    const {employeeDetail}=emp
  return (
   <>
   <div className='p-10 flex justify-center items-center'>
     <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
        <p>{employeeDetail.name}</p>
        <p>{employeeDetail.email}</p>
        <p>{employeeDetail.department}</p>
     </div>
   </div>
   </>
  )
}

export default Employee