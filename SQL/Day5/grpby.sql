-- Create Database
CREATE DATABASE CompanyDB;

-- Use Database
USE CompanyDB;

-- Create Employees Table
CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    city VARCHAR(50)
);

-- Insert 20 Employee Records
INSERT INTO Employees (id, name, department, salary, city) VALUES
(1, 'Arun', 'HR', 35000, 'Chennai'),
(2, 'Priya', 'IT', 60000, 'Coimbatore'),
(3, 'Karthik', 'Finance', 55000, 'Madurai'),
(4, 'Divya', 'Marketing', 45000, 'Salem'),
(5, 'Rahul', 'IT', 70000, 'Chennai'),
(6, 'Sneha', 'HR', 40000, 'Trichy'),
(7, 'Vignesh', 'Sales', 38000, 'Erode'),
(8, 'Meena', 'Finance', 62000, 'Coimbatore'),
(9, 'Suresh', 'Marketing', 50000, 'Madurai'),
(10, 'Anitha', 'IT', 75000, 'Chennai'),
(11, 'Ravi', 'Sales', 42000, 'Salem'),
(12, 'Keerthi', 'HR', 39000, 'Trichy'),
(13, 'Manoj', 'Finance', 68000, 'Erode'),
(14, 'Pooja', 'Marketing', 47000, 'Coimbatore'),
(15, 'Ajith', 'IT', 80000, 'Chennai'),
(16, 'Nisha', 'Sales', 41000, 'Madurai'),
(17, 'Harish', 'HR', 36000, 'Salem'),
(18, 'Deepa', 'Finance', 65000, 'Trichy'),
(19, 'Kiran', 'Marketing', 52000, 'Erode'),
(20, 'Lavanya', 'IT', 85000, 'Coimbatore');

-- Display all records
SELECT * FROM Employees;

SELECT count(department) as totaldepartment from Employees;
SELECT department,count(*)  from Employees group by department;
SELECT department,sum(salary)  from Employees group by  department;
SELECT city,sum(salary)  from Employees group by city;
SELECT department,max(salary) "Highest salary"  from Employees group by  department;
SELECT department,min(salary) "Highest salary"  from Employees group by  department;
SELECT city,avg(salary)  from Employees group by city;


  -- TASK1
      SELECT department "Department",count(*) "Total Employee",sum(salary) "Total salary",
      avg(salary) "Average salary",max(salary) "Highest salary",min(salary) "Lowest salary" from Employees group by department;
      
  -- TASK2
      SELECT city "City",count(*) "Total Employee",sum(salary) "Total salary",
      avg(salary) "Average salary",max(salary) "Highest salary",min(salary) "Lowest salary" from Employees group by city;
      
      -- TASK3
	      SELECT department "Department",count(*) "Total Employee",sum(salary) "Total salary" from Employees group by department ORDER BY sum(salary) DESC;
     
     -- TASK4
          SELECT department "Department",city "City",count(*) "Total Employee",
      avg(salary) "Average salary" from Employees group by department,city;
	
    -- TASK5
        SELECT department "Department",count(*) "Total Employee",sum(salary) "Total salary",  avg(salary) "Average salary",max(salary) "Highest salary",min(salary) "Lowest salary" from Employees group by department ORDER BY sum(salary) DESC limit 3;
         






