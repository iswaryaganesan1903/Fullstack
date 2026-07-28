CREATE DATABASE Recorddb;

CREATE TABLE Employees(
empolyee_id int primary key auto_increment,
employee_name varchar(20),
employee_department varchar(20),
employee_salary bigint,
employee_city varchar(20)
);
INSERT INTO Employees(employee_name,employee_department,employee_salary,employee_city) VALUES("Iswarya","HR",100000,"Chennai");
INSERT INTO Employees(employee_name,employee_department,employee_salary,employee_city) VALUES("Ponnunjali","GM",150000,"Chennai");
INSERT INTO Employees(employee_name,employee_department,employee_salary,employee_city) VALUES("Abinaya","CEO",1000000,"Chennai");
INSERT INTO Employees(employee_name,employee_department,employee_salary,employee_city) VALUES("Kavi","TL",100000,"Chennai");
INSERT INTO Employees(employee_name,employee_department,employee_salary,employee_city) VALUES("Yoga","Manager",200000,"Chennai");
SELECT * FROM Employees;

CREATE TABLE Students(
student_id int primary key auto_increment,
student_name varchar(20),
student_course varchar(20),
student_age bigint,
student_city varchar(20)
);
INSERT INTO Students(student_name,student_course,student_age,student_city) VALUES("Iswarya","Java",21,"Thoothukudi");
INSERT INTO Students(student_name,student_course,student_age,student_city) VALUES("Kavi","MERN",21,"Thirunelvei");
INSERT INTO Students(student_name,student_course,student_age,student_city) VALUES("Bhuvana","Python",26,"Chennai");
INSERT INTO Students(student_name,student_course,student_age,student_city) VALUES("Kaviya","java",19,"Thoothukudi");
INSERT INTO Students(student_name,student_course,student_age,student_city) VALUES("Sangeetha","Node",20,"Madhurai");
INSERT INTO Students(student_name,student_course,student_age,student_city) VALUES("Saran","React",20,"Tenkasi");
INSERT INTO Students(student_name,student_course,student_age,student_city) VALUES("MK","Java",25,"Thoothukudi");
INSERT INTO Students(student_name,student_course,student_age,student_city) VALUES("Yoga","Python",21,"Chennai");

UPDATE Employees SET employee_salary=75000 WHERE empolyee_id=3;
UPDATE Employees SET employee_city = 'Bangalore',employee_department = 'Team Lead' WHERE empolyee_id=2;
DELETE from Employees WHERE empolyee_id=5;
SELECT * FROM Employees;

UPDATE Employees SET employee_salary=110000 WHERE empolyee_id=1;
UPDATE Students SET student_city="Coimbatore" WHERE student_id=3;
UPDATE Students SET student_city="Coimbatore" WHERE student_id=8;

DELETE from Students WHERE student_age<20;
DELETE FROM Students WHERE student_id=4;



CREATE TABLE Product(
product_id int primary key auto_increment,
product_name varchar(20),
price bigint,
category varchar(20)
);

INSERT INTO Product(product_name,price,category) VALUES("Soap",65,"Beauty product"),("Speaker",4000,"Electronics"),("Rice",2500,"Grocery"),
                                                        ("Blutooth headset",5000,"Electronics"),("Groundnut oil",500,"Grocery");
 
UPDATE Product SET price=75 WHERE product_id=1; 
DELETE FROM Product WHERE product_id=4;
SELECT * FROM Product;