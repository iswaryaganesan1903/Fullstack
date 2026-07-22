import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("")
  const changeName = (e) => {
    setName(e.target.value)
  }

  const [storeName, setStoreName] = useState("")
  const handleClick = () => {
    const addData = [...storeName]
    addData.push(name)
    setStoreName(addData)
    setName("")
  }

  const [studentName, setStudentName] = useState("")
  const [course, setCourse] = useState("")
  const showName = (e1) => {
    setStudentName(e1.target.value)
  }
  const showCourse = (e2) => {
    setCourse(e2.target.value)
  }
  const [storeDetails, setStoreDetails] = useState([])
  const handleClick1 = () => {
    const student = {
      name: studentName,
      course: course
    }
    setStoreDetails([...storeDetails, student])
    setStudentName("")
    setCourse("")
  }


  const [tech, setTech] = useState("")
  const changeData= (e) => {
    setTech(e.target.value)
  }
  const [storeTech, setStoreTech] = useState([])
  const handleClick2= () => {
    const addData = [...storeTech]
    addData.push(tech)
    setStoreTech(addData)
    setTech("")
  }

  const [studName, setStudName] = useState("")
  const changeData1= (e) => {
    setStudName(e.target.value)
  }
  const [storestudName, setStoreStudName] = useState([])
  const handleClick3= () => {
    const addData1 = [...storestudName]
    addData1.push(studName)
    setStoreStudName(addData1)
    setStudName("")
  }


   const [productName, setProductName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const showProductName = (f1) => {
    setProductName(f1.target.value)
  }
  const showPrice = (f2) => {
    setPrice(f2.target.value)
  }
  const showCategory = (f3) => {
    setCategory(f3.target.value)
  }
  const [storeDetail1, setStoreDetail1] = useState([])
  const handleClick4 = () => {
    const product = {
      productName: productName,
      price: price,
      category: category
    }
    setStoreDetail1([...storeDetail1, product])
    setProductName("")
    setPrice("")
    setCategory("")
  }


  return (
    <>
      <h1 className='bg-pink-200 p-5 font-bold text-2xl text-center'>Form Handling</h1>
      <div className='p-10 flex flex-col justify-center items-center gap-5'>
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>{storeName}</h2>
          <input type="text" placeholder='Enter your name' onChange={changeName} className='border mb-3' value={name} />
          <button className='border rounded bg-gray-300' onClick={handleClick} >click here</button>
        </div>
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Task 2 - Student Details</h2>
          <input type="text" placeholder='Enter your name' onChange={showName} className='border mb-3' value={studentName} />
          <input type="text" placeholder='Enter your course' onChange={showCourse} className='border mb-3' value={course} />
          <button className='border rounded bg-gray-300' onClick={handleClick1} >click here</button>
          <div>
            {storeDetails.map((student, index) => (
              <div key={index}>
                <p>{student.name}</p>
                <p>{student.course}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Task 3 - Add Technology</h2>
          <input type="text" placeholder='Enter Technology' onChange={changeData} className='border mb-3' value={tech} />
          <button className='border rounded bg-gray-300' onClick={handleClick2} >Click Add</button>
          <div>
            {storeTech.map((element, index) => (
              <div key={index}>
                <p>{element}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Task 4 - Student List</h2>
          <input type="text" placeholder='Enter Student Name' onChange={changeData1} className='border mb-3' value={studName} />
          <button className='border rounded bg-gray-300' onClick={handleClick3} >Click Add</button>
          <div>
            {storestudName.map((element, index) => (
              <div key={index}>
                <p>{element}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Task 5 - Product Details</h2>
          <input type="text" placeholder='Enter your name' onChange={showProductName} className='border mb-3' value={productName} />
          <input type="text" placeholder='Enter your department' onChange={showPrice} className='border mb-3' value={price} />
          <input type="text" placeholder='Enter your salary' onChange={showCategory} className='border mb-3' value={category} />
          <button className='border rounded bg-gray-300 mb-3' onClick={handleClick4} >click here</button>
          <div>
            {storeDetail1.map((element, index) => (
              <div key={index}>
                <div className=' bg-yellow-200 p-4'>
                  <p><strong>Product Name:</strong>{element.productName}</p>
                  <p><strong>Price:</strong>{element.price}</p>
                  <p><strong>Catagory:</strong>{element.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default App