import React, { useState } from 'react'

const App = () => {
  const [obj1,setObj1]=useState({ name:"Iswarya", course:"React"})
  const objectClick=()=>{
   setObj1({...obj1,course:"MERN"})
  }


   const [obj2,setObj2]=useState({ name:"Mobile", price:20000})
   const objectClick1=()=>{
   setObj2({...obj2,price:25000})
  }

  const [array1, setArray1] = useState(["Vijay","Ajith","Suriya"])
  const arrayClick = () => {
    const updateArr1=[...array1]
    updateArr1[1]="SK"
    setArray1(updateArr1)
  }

  const [array2, setArray2] = useState([10,20,30,40])
  const arrayClick1=()=>{
    const updateArr2=[...array2]
    updateArr2[2]=100
    setArray2(updateArr2)
  }

  const [array3, setArray3] = useState(["Apple","Orange"])
  const arrayClick2=()=>{
   const updateArr3=[...array3]
    updateArr3[2]="Mango"
    setArray3(updateArr3)
  } 

  const [array4, setArray4] = useState(["Apple","Orange","Mango"])
  const arrayClick3=()=>{
    const updatArray4=array4.filter((e)=>e !== "Orange")
    setArray4(updatArray4)
  }
  
  const [arrObj,setArrObj]=useState([{id:1,name:"Sudhan"},{ id:2,name:"Rahul"}])
  const arrObjClick=()=>{
    const updateData=arrObj.map((e,i)=>(i===1 ? {...e,name:"Karthik"}:e))
     setArrObj(updateData)
  }

  const [arrObj1,setArrObj1]=useState([{id:1, course:"React"},{ id:2, course:"Node"}])
  const arrObjClick1=()=>{
    const updateData1=arrObj1.map((e,i)=>(i===0 ? {...e,course:"MERN"}:e))
     setArrObj1(updateData1)
  }

  const [arrObj2,setArrObj2]=useState([{id:1, name:"Laptop"}])
  const arrObjClick2=()=>{
    const addData={id:2, name:"Mobile"}
    setArrObj2([...arrObj2,addData])
  }

  const [arrObj3,setArrObj3]=useState([{id:1,name:"Sudhan"},{ id:2,name:"Rahul"},{ id:3,name:"Karthik"}])
  const arrObjClick3=()=>{
    const delData=arrObj3.filter((e)=>(e.id !==2))
    setArrObj3(delData)
  }




  return (
    <>
    <h1 className='bg-pink-200 p-5 font-bold text-2xl text-center'>React useState Rendering</h1>
    <div className='p-10 flex flex-col justify-center items-center gap-5'>
      <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
              <h2 className='font-bold'>TASK-1</h2>
              <div>
                 <p>Name:{obj1.name}</p>
                 <p>Course:{obj1.course}</p>
              </div>
              <div>
                 <button className='border rounded bg-gray-300 ' onClick={objectClick}>click here</button>
              </div>
      </div>
      <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
              <h2 className='font-bold'>TASK-2</h2>
              <div>
                 <p>Name:{obj2.name}</p>
                 <p>Course:{obj2.price}</p>
              </div>
              <div>
                 <button className='border rounded bg-gray-300 ' onClick={objectClick1}>click here</button>
              </div>
      </div>
      <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold'>TASK-3</h2>
          <div>
            {array1.map((e, i) => (
              <div key={i + 1}>
                <p>{e}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={arrayClick}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold'>TASK-4</h2>
          <div>
            {array2.map((e, i) => (
              <div key={i + 1}>
                <p>{e}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={arrayClick1}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold'>TASK-5</h2>
          <div>
            {array3.map((e, i) => (
              <div key={i + 1}>
                <p>{e}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={arrayClick2}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold'>TASK-6</h2>
          <div>
            {array4.map((e, i) => (
              <div key={i + 1}>
                <p>{e}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={arrayClick3}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold'>TASK-7</h2>
          <div>
            {arrObj.map((e, i) => (
              <div key={i + 1}>
                <p>Id:{e.id}</p>
                 <p>Name:{e.name}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={arrObjClick}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold'>TASK-8</h2>
          <div>
            {arrObj1.map((e, i) => (
              <div key={i + 1}>
                <p>Id:{e.id}</p>
                 <p>Course:{e.course}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={arrObjClick1}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold'>TASK-9</h2>
          <div>
            {arrObj2.map((e, i) => (
              <div key={i + 1}>
                <p>Id:{e.id}</p>
                 <p>Course:{e.name}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={arrObjClick2}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold'>TASK-9</h2>
          <div>
            {arrObj3.map((e, i) => (
              <div key={i + 1}>
                <p>Id:{e.id}</p>
                 <p>Course:{e.name}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={arrObjClick3}>click here</button>
          </div>
        </div>
    </div>
    </>
  )
  
}

export default App