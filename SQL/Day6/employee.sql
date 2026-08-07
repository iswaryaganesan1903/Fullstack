-- Create Database
CREATE DATABASE newCompanyDB;

-- Use Database
USE newCompanyDB;

-- Create Employees Table
CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    city VARCHAR(50)
);
ALTER TABLE Employees ADD email varchar(30);
ALTER TABLE Employees MODIFY salary bigint;
ALTER TABLE Employees CHANGE city location varchar(50);

-- Insert 20 Employee Records
INSERT INTO Employees (id, name, department, salary, location, email)
VALUES
(1, 'Arun', 'HR', 35000, 'Chennai', 'arun@gmail.com'),
(2, 'Priya', 'IT', 60000, 'Coimbatore', 'priya@gmail.com'),
(3, 'Karthik', 'Finance', 55000, 'Madurai', 'karthik@gmail.com'),
(4, 'Divya', 'Marketing', 45000, 'Salem', 'divya@gmail.com'),
(5, 'Rahul', 'IT', 70000, 'Chennai', 'rahul@gmail.com'),
(6, 'Sneha', 'HR', 40000, 'Trichy', 'sneha@gmail.com'),
(7, 'Vignesh', 'Sales', 38000, 'Erode', 'vignesh@gmail.com'),
(8, 'Meena', 'Finance', 62000, 'Coimbatore', 'meena@gmail.com'),
(9, 'Suresh', 'Marketing', 50000, 'Madurai', 'suresh@gmail.com'),
(10, 'Anitha', 'IT', 75000, 'Chennai', 'anitha@gmail.com');



DELETE from Employees where id=5;
   -- DROP TABLE Employees;
UPDATE Employees SET salary=52000 WHERE id=9;
   -- DROP DATABASE newCompanyDB;
UPDATE Employees SET department="Marketing" WHERE id=6;
UPDATE Employees SET salary=50000,location="Tuty" WHERE id=1;

DELETE FROM Employees where id=3;
DELETE FROM Employees where location="Tuty";


-- Display all records
SELECT * FROM Employees;
SELECT name,salary FROM Employees;
SELECT DISTINCT department from Employees;
SELECT * from Employees WHERE salary>40000;
SELECT * from Employees WHERE salary>40000 AND location="Tuty";
SELECT * from Employees WHERE location="Chennai" OR location="Tuty";
SELECT * from Employees WHERE id IN(4,7);
SELECT * from Employees WHERE id NOT IN(4,7);
SELECT * from Employees WHERE salary BETWEEN 40000 AND 70000 ;
SELECT * from Employees WHERE location LIKE "c%";

SELECT * from Employees ORDER BY salary DESC;
SELECT * from Employees ORDER BY salary ASC;
SELECT * from Employees ORDER BY salary DESC limit 5 ;
SELECT * from Employees ORDER BY salary ASC limit 3;

SELECT department,count(*)  from Employees group by department;
SELECT department,sum(salary)  from Employees group by department;
SELECT location,avg(salary) from Employees group by location;
SELECT department,sum(salary) from Employees group by department ORDER BY sum(salary) DESC;


SELECT department,sum(salary),count(*) from Employees group by department having sum(salary)>150000;
SELECT city,avg(salary) from Employees group by city having avg(salary)>50000;
SELECT department,count(*),sum(salary) as "total_salary",avg(salary) from Employees group by department having count(*)>2 AND avg(salary)>50000 order by "total salary" DESC ;
