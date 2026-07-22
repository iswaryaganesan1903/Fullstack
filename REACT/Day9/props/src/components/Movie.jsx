import React from 'react'

const Movie = ({ movieHeros }) => {
  return (
    <>
     <div className='p-10 flex justify-center items-center'>
        <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
            {movieHeros.map((hero, index) => (
            <p key={index+1}>{hero}</p>
            ))}
        </div>
     </div>
    </>
  )
}

export default Movie