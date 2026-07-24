CREATE DATABASE CompanyDB;
USE CompanyDB;
CREATE TABLE Employees(
emp_id int primary key auto_increment,
emp_name varchar(20),
department varchar(20),
salary int,
city varchar(20)
);
DESC Employees;
ALTER TABLE Employees ADD email varchar(20);
ALTER TABLE Employees ADD phone int;
ALTER TABLE Employees ADD experience varchar(20);
ALTER TABLE Employees MODIFY salary bigint;
ALTER TABLE Employees MODIFY phone bigint;
DESC Employees;
ALTER TABLE Employees CHANGE emp_name  employee_name VARCHAR(20);
ALTER TABLE Employees CHANGE city location VARCHAR(20);
ALTER TABLE Employees DROP column experience;
ALTER TABLE Employees DROP column email;
RENAME TABLE Employees TO EmployeeDetails;
DESC EmployeeDetails

CREATE TABLE Students(
student_id int primary key auto_increment,
student_name varchar(20),
course varchar(20),
age int,
city varchar(20)
);
ALTER TABLE Students ADD mobile int;
DESC Students;
TRUNCATE TABLE Students;
DROP TABLE Students;
DROP TABLE EmployeeDetails;
DROP DATABASE CompanyDB;






