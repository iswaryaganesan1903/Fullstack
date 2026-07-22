import React, { useState } from 'react'

const App = () => {
  const [array1, setArray1] = useState(["Vijay","Ajith","Suriya"])
  const [array2, setArray2] = useState(["Apple","Orange","Mango"])
  const [object, setObject] = useState({ name: "Iswarya", course: "JS" })
  const [object1, setObject1] = useState({  company:"Google", city:"Chennai" })
  const [studentArr,setStudentArr]=useState([{ id:1,name:"Sudhan"},{id:2, name:"Rahul"}])
  const [productArr,setProductArr]=useState([{ id:1,name:"Mobile"},{id:2, name:"Laptop"}])
  const [employeeArr,setEmployeeArr]=useState([{ id:1,name:"Arun"},{id:2, name:"Kumar"}])

  const arrayClick = () => {
    const updateArr1=[...array1]
    updateArr1[1]="SK"
    setArray1(updateArr1)
  }

   const fruitClick = () => {
    const updateArr2=[...array2]
    updateArr2[1]="Banana"
    setArray2(updateArr2)
  }

  const objectClick = () => {
    setObject({ ...object, course: "React" })
  }

   const objectClick1 = () => {
    setObject1({ ...object1, company: "Microsoft" })
  }
  const updateClick =()=>{
    const objArr1=studentArr.map((element,index)=>(
      index===1 ? {...element,name :"Vijay"} : element
    ))
     setStudentArr(objArr1);
  }
  const updateClick1 =()=>{
    const objArr2=productArr.map((element,index)=>(
      index===1 ? {...element,name :"Tablet"} : element
    ))
     setProductArr(objArr2);
  }
   const updateClick2 =()=>{
    const objArr3=employeeArr.map((element,index)=>(
      index===1 ? {...element,name :"Saran"} : element
    ))
     setEmployeeArr(objArr3);
  }


  return (
    <>
     <h1 className='bg-yellow-200 p-5 font-bold text-2xl text-center'>React useState Rendering</h1>
      <div className='p-10 flex flex-col justify-center items-center gap-5'>
       
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold'>TASK-1</h2>
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
          <h2 className='font-bold'>TASK-2</h2>
          <div>
            {array2.map((e, i) => (
              <div key={i + 1}>
                <p>{e}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={fruitClick}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
           <h2 className='font-bold'>TASK-3</h2>
          <div>
            <p>Name:{object.name}</p>
            <p>Course:{object.course}</p>
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={objectClick}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
           <h2 className='font-bold'>TASK-4</h2>
          <div>
            <p>Company:{object1.company}</p>
            <p>City:{object1.city}</p>
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={objectClick1}>click here</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
           <h2 className='font-bold'>TASK-5</h2>
          <div>
           {studentArr.map((f,j)=>(
            <div key={j+1}>
              <p>Id:{f.id}</p>
              <p>Name:{f.name}</p>
            </div>
           ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={updateClick}>Update Student</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
           <h2 className='font-bold'>TASK-6</h2>
          <div>
           {productArr.map((f,j)=>(
            <div key={j+1}>
              <p>Id:{f.id}</p>
              <p>Name:{f.name}</p>
            </div>
           ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={updateClick1}>Update Student</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-100 rounded-xl flex flex-col justify-center items-center'>
           <h2 className='font-bold'>TASK-7</h2>
          <div>
           {employeeArr.map((f,j)=>(
            <div key={j+1}>
              <p>Id:{f.id}</p>
              <p>Name:{f.name}</p>
            </div>
           ))}
          </div>
          <div>
            <button className='border rounded bg-gray-300 ' onClick={updateClick2}>Update Student</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App