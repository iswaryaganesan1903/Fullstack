import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const handleClick=()=>{
     setCount(count+1)
  }

  useEffect(()=>{
    console.log('Count:',count+1);
  },[count])
  
  const [data, setData] = useState([])
  const showData = async () => {
    const getData = await fetch("https://jsonplaceholder.typicode.com/users")
    const saveData = await getData.json()
    console.log(saveData);
    setData(saveData)
  }
  useEffect(() => {
    showData()
  }, [])

  const [number,setNumber]=useState(0)
  useEffect(()=>{
    const timer=setInterval(()=>{
      setNumber((prev)=>prev+1)
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[number])
  return (
    <>
      <h1 className='bg-blue-200 p-5 font-bold text-2xl text-center'>React useEffect Tasks</h1>
      <div className='p-10 flex flex-col justify-center items-center gap-5'>
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Task-1</h2>
          <div>
              <p>Count:{count}</p>
              <button className='border rounded bg-gray-300' onClick={handleClick}>Increament</button>
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Task-2</h2>
          <div>
            {
              data.map((e, i) => (
                <div key={e.id}>
                  <p>{i + 1}.Name:{e.name}</p>
                  <p>Email:{e.email}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Task-3</h2>
          <div>
              <p>Count:{number}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App