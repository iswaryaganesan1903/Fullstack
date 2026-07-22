import { Routes, Route } from "react-router-dom";
import Student from "./components/Student";
import Employee from "./components/Employee";
import Product from "./components/Product";
import Movie from "./components/Movie";
import StudentList from "./components/StudentList";
import Navbar from "./components/Navbar";


const App=()=> {
  const student = { name: "Iswarya", age: 21, course: "Java Fullstack" }
    const employee = { name: "Iswarya", email: "iswarya@gmail.com", department: "Backend" }
    const product = { productName: "Wireless Bluetooth Headphones", price: 2499, stockStatus: "In Stock" };
    const heros = ["Vijay", "Ajith", "Surya"]
    const studentList = [
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
      <Navbar/>

      <Routes>
        <Route path="/" element={<Student studentDetail={student}/>} />
        <Route path="/employee" element={<Employee employeeDetail={employee}/>} />
        <Route path="/product" element={<Product productDetail={product} />} />
        <Route path="/movie" element={<Movie movieHeros={heros}/>} />
        <Route path="/studentlist" element={<StudentList studentsInfo={studentList}/>}/>
      </Routes>
    </>
  );
}

export default App;