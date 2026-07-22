import React from 'react'

const App = () => {
    const Company="Google"
    const totalEmployees=180000
    let isHiring=true
  return (
    <>
      <div>
        <div className='bg-yellow-100 h-20 p-5' >
              <h1 className='text-2xl text-center'>React Rendering Methods</h1>
        </div>
        <div className='p-10 '>
            <div className='px-10 flex flex-col bg-blue-200 justify-center items-center'>
                <p><strong>Company Name:</strong>Google</p>
                <p>{isHiring && "Google is now hiring"}</p>

            </div>
        </div>
      </div>
    </>
  )
}

export default App