USE newCompanyDB;
SELECT * FROM Employees;

CREATE TABLE emp_insert_backup(
	 id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    city VARCHAR(50)
);
CREATE TABLE emp_update_backup(
	id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    oldsalary INT,
    newsalary INT,
    city VARCHAR(50)
);


CREATE TABLE emp_delete_backup(
	id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    oldsalary INT,
    city VARCHAR(50)
);

DELIMITER $$
CREATE TRIGGER trigger_insert
after INSERT on Employees
for each row
begin 
   INSERT into emp_insert_backup (id,name,department,salary,location) values(new.id,new.name,new.department,new.salary,new.location);
END $$
DELIMITER ;   


DELIMITER $$
CREATE TRIGGER trigger_update
after UPDATE on Employees
for each row
begin 
   INSERT INTO emp_insert_backup(id,name,department,newsalary,oldsalary,location) values(id,name,department,new.salary,old.salary,location);
END $$
DELIMITER ;  

DELIMITER $$
CREATE TRIGGER trigger_delete
after DELETE on Employees
for each row
begin 
   INSERT INTO emp_delete_backup(id,name,department,oldsalary,location) values(id,name,department,old.salary,location);
END $$
DELIMITER ;   



INSERT into Employees(id,name,department,salary,location) values(11,"Iswarya","Developer",60000,"Chennai");
UPDATE Employees SET salary=55000 WHERE id=11;
DELETE from Employees where id=5;