import React, { useState } from 'react'

const App = () => {
  const [userName,setUserName]=useState("")
  const [store,setStore]=useState([])
  const handleChange=(e)=>{
    setUserName(e.target.value)
  }
  const handleClick=()=>{
   const datas=[...store]
   datas.push(userName)
   setStore(datas)
   setUserName("")
  }

  
  return (
    <>
     <p>{userName}</p>
    <input type="text" placeholder='Enter your name' value={userName} onChange={handleChange} />
    <button onClick={handleClick}>click here</button>
    <div>
      {
        store.map((e,i)=>(
          <div key={i+1}>
            <p>{e}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App