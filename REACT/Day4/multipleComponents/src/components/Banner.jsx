import React from 'react'
import Bannerimage from "../assets/banner.jpg"
import Image from "../assets/6.png"

const Banner = () => {
  return (
   <>
     <img src={Bannerimage} className="w-350 h-100 mt-10" />
   </>
  )
}
export default Banner

export const CardDisplay=()=>{
    return(
        <>
           <div className='bg-blue-100 mt-10 h-80 flex justify-center items-center gap-4'>
             <div className='bg-blue-400 h-70 w-60 flex flex-col justify-center items-center'>
                <img src={Image} alt="" className='w-50 h-60'/>
                <p>This is card</p>
             </div>
             <div className='bg-blue-400 h-70 w-60 flex flex-col justify-center items-center'>
                <img src={Image} alt="" className='w-50 h-60'/>
                <p>This is card</p>
             </div>
             <div className='bg-blue-400 h-70 w-60 flex flex-col justify-center items-center'>
                <img src={Image} alt="" className='w-50 h-60'/>
                <p>This is card</p>
             </div>
             <div className='bg-blue-400 h-70 w-60 flex flex-col justify-center items-center'>
                <img src={Image} alt="" className='w-50 h-60'/>
                <p>This is card</p>
             </div>
             
           </div>
        </>
    )
}