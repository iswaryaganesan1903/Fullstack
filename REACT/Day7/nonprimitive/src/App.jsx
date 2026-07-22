import React from 'react'
import { GetCompanyName } from './GetCompanyName'

const App = () => {
  const arr=["Vijay","Ajith","Suriya","SK","Dhanush"]
  const obj={name:"Iswarya",age:21,course:"Java Fullstack"}
  const arrObj=[{id:1,name:"Iswarya",course:"Java Fullstack"},{id:2,name:"Bhuvana",course:"Python Fullstack"},{id:3,name:"Kaviya",course:"Mern Fullstack"},]
  return (
    <>
    <GetCompanyName/>
     <div className='bg-blue-200 w-full h-70 p-10'>
      <h2 className='text-2xl text-center mb-5'>Array Rendering </h2>
        <div className=" flex justify-center items-center">
           <ul className='bg-amber-200 h-40 w-70 flex flex-col justify-center px-25 py-3'>
             {arr.map((e,i)=>(
              <li key={i+1}>{i+1}.{e}</li>
             ))}
           </ul>
        </div>     
     </div>
    <div className='bg-pink-200 w-full h-70 p-10'>
       <h2 className='text-2xl text-center mb-5'>Object Rendering </h2>
       <div className='flex justify-center items-center'>
       <div className='bg-violet-300 h-30 w-70 flex flex-col px-25 py-3'>
         <div>Name:{obj.name}</div>
         <div>Age:{obj.age}</div>
         <div>Course:{obj.course}</div>
       </div>
     </div>
    </div>
    <div className='bg-green-200 w-full h-70 p-10'>
       <h2 className='text-2xl text-center mb-5'>Array of Object Rendering </h2>
       <div className='flex justify-center items-center'>
       <div className='bg-yellow-200 h-30 w-130 flex flex-col px-25 py-3'>
          {arrObj.map((e,i)=>(
            <p>Id:{e.id}  Name:{e.name}   Course:{e.course}</p>
          ))
          }
       </div>
     </div>
    </div>
    </>
  )
}

export default App



