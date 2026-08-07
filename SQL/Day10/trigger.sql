CREATE DATABASE newCompanyDB;
USE newCompanyDB;


CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    location VARCHAR(50)
);


CREATE TABLE emp_insert_backup (
    id INT,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    location VARCHAR(50)
);

CREATE TABLE emp_update_backup (
    id INT,
    name VARCHAR(50),
    department VARCHAR(50),
    oldsalary INT,
    newsalary INT,
    location VARCHAR(50)
);

CREATE TABLE emp_delete_backup (
    id INT,
    name VARCHAR(50),
    department VARCHAR(50),
    oldsalary INT,
    location VARCHAR(50)
);

CREATE TABLE emp_update1_backup (
    id INT,
    name VARCHAR(50),
    department VARCHAR(50),
    oldsalary INT,
    newsalary INT,
    location VARCHAR(50)
);



DELIMITER $$
CREATE TRIGGER trigger_insert
AFTER INSERT ON Employees
FOR EACH ROW
BEGIN
    INSERT INTO emp_insert_backup (id,name,department,salary,location) VALUES (NEW.id,NEW.name,NEW.department,NEW.salary,NEW.location);
END $$
DELIMITER ;



DELIMITER $$
CREATE TRIGGER trigger_update
AFTER UPDATE ON Employees
FOR EACH ROW
BEGIN
    INSERT INTO emp_update_backup (id,name,department,oldsalary,newsalary,location) VALUES (NEW.id,NEW.name,NEW.department,OLD.salary,NEW.salary,NEW.location);
END $$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER trigger_delete
AFTER DELETE ON Employees
FOR EACH ROW
BEGIN
    INSERT INTO emp_delete_backup (id,name,department,oldsalary,location) VALUES(OLD.id,OLD.name,OLD.department,OLD.salary,OLD.location);
END $$
DELIMITER ;



DELIMITER $$
CREATE TRIGGER trigger_before_update
BEFORE UPDATE ON Employees
FOR EACH ROW
BEGIN
    INSERT INTO emp_update1_backup(id,name,department,oldsalary,newsalary,location) VALUES(OLD.id,OLD.name,OLD.department,OLD.salary,NEW.salary,OLD.location);
END $$
DELIMITER ;


INSERT INTO Employees
VALUES
(1,'Arun','Developer',40000,'Chennai'),
(2,'Priya','HR',30000,'Coimbatore'),
(3,'Rahul','Tester',25000,'Madurai'),
(4,'Sneha','Developer',50000,'Salem'),
(5,'Vijay','Manager',70000,'Trichy');



INSERT INTO Employees VALUES(11,'Iswarya','Developer',60000,'Chennai');

UPDATE Employees SET salary=55000 WHERE id=11;

DELETE FROM Employees WHERE id=5;



SELECT * FROM Employees;
SELECT * FROM emp_insert_backup;
SELECT * FROM emp_update_backup;
SELECT * FROM emp_delete_backup;
SELECT * FROM emp_update1_backup;


-- TASK 9 - PRODUCT BACKUP


-- Create Product Table
CREATE TABLE teaproduct (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10,2),
    quantity INT
);

INSERT INTO teaproduct
VALUES
(101,'Green Tea',120,50),
(102,'Black Tea',150,40),
(103,'Masala Tea',180,60);

-- Create Backup Table
CREATE TABLE product_backup (
    product_id INT,
    product_name VARCHAR(50),
    price DECIMAL(10,2),
    quantity INT
);

DELIMITER $$
CREATE TRIGGER product_backup_trigger
AFTER UPDATE
ON teaproduct
FOR EACH ROW
BEGIN
    INSERT INTO product_backup(product_id,product_name,price,quantity)
    VALUES(OLD.product_id,OLD.product_name,OLD.price,OLD.quantity);
END $$

DELIMITER ;

UPDATE teaproduct SET price=200,quantity=55 WHERE product_id=101;

SELECT * FROM teaproduct;
SELECT * FROM product_backup;



-- TASK 10 - CUSTOMER AUDIT
-- Create Customer Table
CREATE TABLE customer (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(50)
);
INSERT INTO customer
VALUES
(1,'Iswarya','Chennai'),
(2,'Rahul','Madurai'),
(3,'Priya','Coimbatore');


-- Create Audit Table
CREATE TABLE customer_audit (
    customer_id INT,
    customer_name VARCHAR(50),
    operation VARCHAR(20),
    action_time DATETIME
);


DELIMITER $$
CREATE TRIGGER customer_insert_trigger
AFTER INSERT
ON customer
FOR EACH ROW
BEGIN
    INSERT INTO customer_audit (customer_id,customer_name,operation,action_time)
    VALUES(NEW.customer_id,NEW.customer_name,'INSERT',NOW());
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER customer_update_trigger
AFTER UPDATE
ON customer
FOR EACH ROW
BEGIN
    INSERT INTO customer_audit
    (customer_id,customer_name,operation,action_time)
    VALUES(NEW.customer_id,NEW.customer_name,'UPDATE',NOW());
END $$

DELIMITER ;

DELIMITER $$
CREATE TRIGGER customer_delete_trigger
AFTER DELETE
ON customer
FOR EACH ROW
BEGIN
    INSERT INTO customer_audit(customer_id,customer_name,operation,action_time)
    VALUES(OLD.customer_id,OLD.customer_name,'DELETE',NOW());
END $$
DELIMITER ;



-- Update Customer
UPDATE customer SET city='Salem' WHERE customer_id=2;

-- Delete Customer
DELETE FROM customer WHERE customer_id=3;

-- View Tables
SELECT * FROM customer;
SELECT * FROM customer_audit;

