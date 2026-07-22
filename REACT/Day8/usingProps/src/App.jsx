import React from 'react'
import StudentCard from './components/StudentCard'
import ProfileCard from './components/ProfileCard'
import StudentList from './components/StudentList'

const App = () => {
  const Name="Iswarya"
  const Age=21
  const Course="Java FS"
  const isStatus="Active"
  const obj={name:"Iswarya",email:"ise@gmail.com",city:"Chennai",experience:"No"}
  const students = [
  {
    id: 1,
    name: "Aarav",
    course: "Java Full Stack"
  },
  {
    id: 2,
    name: "Priya",
    course: "Python Full Stack"
  },
  {
    id: 3,
    name: "Rahul",
    course: "MERN Stack"
  },
  {
    id: 4,
    name: "Sneha",
    course: "Data Science"
  },
  {
    id: 5,
    name: "Karthik",
    course: "UI/UX Design"
  }
];
  return (
    <>
     <div className='flex justify-center'>
        <StudentCard name={Name} age={Age} course={Course} status={isStatus} />
        <ProfileCard Details={obj}/>  
     </div>
     <p className='text-center'>Task3</p>
     <StudentList List={students}/>
    </>
  )
}

export default App