import React from 'react'

const ProfileCard = (props) => {
    const {Details}=props
    console.log(props);
    

  return (
      <>
    <div className='p-10 flex'>
       <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
        <p className='text-center'>Task2</p>
        <p><strong>Name:</strong>{Details.name}</p>
        <p><strong>Email:</strong>{Details.email}</p>
        <p><strong>City:</strong>{Details.city}</p>
        <p><strong>Experience:</strong>{Details.experience}</p>
       </div>
    </div>
   </>
  )
}

export default ProfileCard