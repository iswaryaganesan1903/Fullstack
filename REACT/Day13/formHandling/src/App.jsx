import { useState } from 'react'

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

  const [employeeName, setEmployeeName] = useState("")
  const [department, setDepartment] = useState("")
  const [salary, setSalary] = useState("")
  const showempName = (f1) => {
    setEmployeeName(f1.target.value)
  }
  const showDep = (f2) => {
    setDepartment(f2.target.value)
  }
  const showsal = (f3) => {
    setSalary(f3.target.value)
  }
  const [storeDetail, setStoreDetail] = useState([])
  const handleClick2 = () => {
    const employee = {
      name: employeeName,
      department: department,
      empSalary: salary
    }
    setStoreDetail([...storeDetail, employee])
    setEmployeeName("")
    setDepartment("")
    setSalary("")
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
  const handleClick3 = () => {
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


  const [Username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [age, setAge] = useState("")

  const showUserName = (f1) => {
    setUserName(f1.target.value)
  }

  const showEmail = (f2) => {
    setEmail(f2.target.value)
  }

  const showCity = (f3) => {
    setCity(f3.target.value)
  }

  const showAge = (f4) => {
    setAge(f4.target.value)
  }

  const [storeDetail2, setStoreDetail2] = useState([])

  const handleClick4 = () => {
    const person = {
      name: Username,
      email: email,
      city: city,
      age: age
    }

    setStoreDetail2([...storeDetail2, person])

    showUserName("")
    setEmail("")
    setCity("")
    setAge("")
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
          <input type="text" placeholder='Enter your name' onChange={showCourse} className='border mb-3' value={course} />
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
          <h2 className='font-bold text-2xl'>Task 3 - Employee Details</h2>
          <input type="text" placeholder='Enter your name' onChange={showempName} className='border mb-3' value={employeeName} />
          <input type="text" placeholder='Enter your department' onChange={showDep} className='border mb-3' value={department} />
          <input type="text" placeholder='Enter your salary' onChange={showsal} className='border mb-3' value={salary} />
          <button className='border rounded bg-gray-300' onClick={handleClick2} >click here</button>
          <div>
            {storeDetail.map((element, index) => (
              <div key={index}>
                <p>{element.name}</p>
                <p>{element.department}</p>
                <p>{element.empSalary}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Task 4 - Product Details</h2>
          <input type="text" placeholder='Enter your name' onChange={showProductName} className='border mb-3' value={productName} />
          <input type="text" placeholder='Enter your department' onChange={showPrice} className='border mb-3' value={price} />
          <input type="text" placeholder='Enter your salary' onChange={showCategory} className='border mb-3' value={category} />
          <button className='border rounded bg-gray-300 mb-3' onClick={handleClick3} >click here</button>
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
        <div className='border px-20 py-4 h-full w-150 rounded-xl flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Task 5 - User Profile</h2>

          <input
            type="text"
            placeholder='Enter your name'
            onChange={showUserName}
            className='border mb-3'
            value={Username}
          />

          <input
            type="email"
            placeholder='Enter your email'
            onChange={showEmail}
            className='border mb-3'
            value={email}
          />

          <input
            type="text"
            placeholder='Enter your city'
            onChange={showCity}
            className='border mb-3'
            value={city}
          />

          <input
            type="number"
            placeholder='Enter your age'
            onChange={showAge}
            className='border mb-3'
            value={age}
          />

          <button
            className='border rounded bg-gray-300 mb-3'
            onClick={handleClick4}
          >
            Click Here
          </button>

          <div>
            {storeDetail2.map((element, index) => (
              <div key={index}>
                <div className='bg-yellow-200 p-4'>
                  <p><strong>Name:</strong> {element.name}</p>
                  <p><strong>Email:</strong> {element.email}</p>
                  <p><strong>City:</strong> {element.city}</p>
                  <p><strong>Age:</strong> {element.age}</p>
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