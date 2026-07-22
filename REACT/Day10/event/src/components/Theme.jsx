import React, { useState } from 'react'

const Theme = () => {
    const [theme, setTheme] = useState(false)
    const buttonClick = () => {
        setTheme(!theme)
    }
    return (
        <>
            <div className='bg-white flex flex-col justify-center items-center'>
                <button onClick={buttonClick} className='border bg-white px-4 rounded-xl mt-5'>Toggle</button>
                {theme ? <p className='bg-black w-500 h-500'></p> : <p className='bg-white w-500 h-500'></p>}
                
            </div>
        </>
    )
}

export default Theme