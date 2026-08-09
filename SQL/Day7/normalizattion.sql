 -- Task1
CREATE DATABASE ElectionDB;
USE ElectionDB;
CREATE TABLE Parties (
    party_id INT PRIMARY KEY AUTO_INCREMENT,
    party_name VARCHAR(100),
    symbol VARCHAR(50)
);
CREATE TABLE Candidates (
    candidate_id INT PRIMARY KEY AUTO_INCREMENT,
    candidate_name VARCHAR(100),
    age INT,
    party_id INT,
    constituency VARCHAR(100),
    FOREIGN KEY (party_id)
    REFERENCES Parties(party_id)
);
CREATE TABLE Voters (
    voter_id INT PRIMARY KEY AUTO_INCREMENT,
    voter_name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    address VARCHAR(200),
    constituency VARCHAR(100)
);
CREATE TABLE PollingBooths (
    booth_id INT PRIMARY KEY AUTO_INCREMENT,
    booth_name VARCHAR(100),
    location VARCHAR(150)
);
CREATE TABLE Elections (
    election_id INT PRIMARY KEY AUTO_INCREMENT,
    election_name VARCHAR(100),
    election_date DATE
);
CREATE TABLE Votes (
    vote_id INT PRIMARY KEY AUTO_INCREMENT,
    voter_id INT,
    candidate_id INT,
    election_id INT,
    booth_id INT,
    vote_time DATETIME,
    FOREIGN KEY (voter_id) REFERENCES Voters(voter_id),
    FOREIGN KEY (candidate_id) REFERENCES Candidates(candidate_id),
    FOREIGN KEY (election_id) REFERENCES Elections(election_id),
    FOREIGN KEY (booth_id) REFERENCES PollingBooths(booth_id)
);
INSERT INTO Parties (party_name, symbol) VALUES
('People Party', 'Lotus'),
('National Party', 'Hand'),
('Green Party', 'Tree'),
('Youth Party', 'Star'),
('Unity Party', 'Sun');
INSERT INTO Candidates (candidate_name, age, party_id, constituency) VALUES
('Ramesh', 45, 1, 'Chennai'),
('Suresh', 50, 2, 'Madurai'),
('Karthik', 39, 3, 'Salem'),
('Vijay', 42, 4, 'Trichy'),
('Ajith', 48, 5, 'Coimbatore');
INSERT INTO Voters (voter_name, age, gender, address, constituency)
VALUES
('Arun', 23, 'Male', 'Chennai', 'Chennai'),
('Priya', 25, 'Female', 'Madurai', 'Madurai'),
('Divya', 28, 'Female', 'Salem', 'Salem'),
('Kumar', 35, 'Male', 'Trichy', 'Trichy'),
('Nisha', 30, 'Female', 'Coimbatore', 'Coimbatore'),
('Hari', 29, 'Male', 'Chennai', 'Chennai'),
('Anu', 26, 'Female', 'Madurai', 'Madurai'),
('John', 31, 'Male', 'Salem', 'Salem'),
('Rahul', 24, 'Male', 'Trichy', 'Trichy'),
('Meena', 27, 'Female', 'Coimbatore', 'Coimbatore');
INSERT INTO PollingBooths (booth_name, location)
VALUES
('Booth A', 'Chennai'),
('Booth B', 'Madurai'),
('Booth C', 'Salem'),
('Booth D', 'Trichy'),
('Booth E', 'Coimbatore');
INSERT INTO Elections (election_name, election_date)
VALUES
('Assembly Election', '2026-05-10');
INSERT INTO Votes (voter_id, candidate_id, election_id, booth_id, vote_time)
VALUES
(1, 1, 1, 1, NOW()),
(2, 2, 1, 2, NOW()),
(3, 3, 1, 3, NOW()),
(4, 4, 1, 4, NOW()),
(5, 5, 1, 5, NOW()),
(6, 1, 1, 1, NOW()),
(7, 2, 1, 2, NOW()),
(8, 3, 1, 3, NOW()),
(9, 4, 1, 4, NOW()),
(10, 5, 1, 5, NOW());
SELECT * FROM Parties;
SELECT * FROM Candidates;
SELECT * FROM Voters;
SELECT * FROM PollingBooths;
SELECT * FROM Elections;
SELECT * FROM Votes;

 -- Task2
CREATE DATABASE HospitalDB;
USE HospitalDB;
-- Doctors Table
CREATE TABLE Doctors (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_name VARCHAR(100),
    specialization VARCHAR(100),
    phone VARCHAR(15)
);
-- Patients Table
CREATE TABLE Patients (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    phone VARCHAR(15)
);
-- Appointments Table
CREATE TABLE Appointments (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    doctor_id INT,
    appointment_date DATE,
    appointment_time TIME,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id)
);
-- Treatments Table
CREATE TABLE Treatments (
    treatment_id INT PRIMARY KEY AUTO_INCREMENT,
    appointment_id INT,
    diagnosis VARCHAR(200),
    medicine VARCHAR(200),
    FOREIGN KEY (appointment_id)
    REFERENCES Appointments(appointment_id)
);
-- Bills Table
CREATE TABLE Bills (
    bill_id INT PRIMARY KEY AUTO_INCREMENT,
    treatment_id INT,
    amount DECIMAL(10,2),
    payment_status VARCHAR(20),
    FOREIGN KEY (treatment_id)
    REFERENCES Treatments(treatment_id)
);
-- Insert Doctors
INSERT INTO Doctors
(doctor_name, specialization, phone)
VALUES
('Dr. Kumar', 'Cardiology', '9876543210'),
('Dr. Priya', 'Orthopedic', '9876543211'),
('Dr. John', 'Neurology', '9876543212'),
('Dr. Ravi', 'Dermatology', '9876543213'),
('Dr. Meena', 'Pediatrics', '9876543214');
-- Insert Patients
INSERT INTO Patients
(patient_name, age, gender, phone)
VALUES
('Arun', 25, 'Male', '9000000001'),
('Divya', 22, 'Female', '9000000002'),
('Kiran', 35, 'Male', '9000000003'),
('Anu', 30, 'Female', '9000000004'),
('Hari', 40, 'Male', '9000000005'),
('Rahul', 28, 'Male', '9000000006'),
('Sneha', 24, 'Female', '9000000007'),
('Nisha', 33, 'Female', '9000000008'),
('Ajay', 45, 'Male', '9000000009'),
('Keerthi', 29, 'Female', '9000000010');
-- Insert Appointments
INSERT INTO Appointments
(patient_id, doctor_id, appointment_date, appointment_time)
VALUES
(1, 1, '2026-08-01', '10:00:00'),
(2, 2, '2026-08-01', '10:30:00'),
(3, 3, '2026-08-01', '11:00:00'),
(4, 4, '2026-08-01', '11:30:00'),
(5, 5, '2026-08-01', '12:00:00'),
(6, 1, '2026-08-02', '10:00:00'),
(7, 2, '2026-08-02', '10:30:00'),
(8, 3, '2026-08-02', '11:00:00'),
(9, 4, '2026-08-02', '11:30:00'),
(10, 5, '2026-08-02', '12:00:00');
-- Insert Treatments
INSERT INTO Treatments
(appointment_id, diagnosis, medicine)
VALUES
(1, 'Fever', 'Paracetamol'),
(2, 'Fracture', 'Pain Killer'),
(3, 'Headache', 'Ibuprofen'),
(4, 'Skin Allergy', 'Cetirizine'),
(5, 'Cold', 'Medicine A'),
(6, 'BP', 'Tablet A'),
(7, 'Sugar', 'Tablet B'),
(8, 'Migraine', 'Tablet C'),
(9, 'Rash', 'Cream'),
(10, 'Cough', 'Syrup');
-- Insert Bills
INSERT INTO Bills
(treatment_id, amount, payment_status)
VALUES
(1, 500, 'Paid'),
(2, 1200, 'Paid'),
(3, 700, 'Pending'),
(4, 900, 'Paid'),
(5, 650, 'Paid'),
(6, 800, 'Pending'),
(7, 950, 'Paid'),
(8, 750, 'Paid'),
(9, 600, 'Pending'),
(10, 400, 'Paid');
SELECT * FROM Doctors;
SELECT * FROM Patients;
SELECT * FROM Appointments;
SELECT * FROM Treatments;
SELECT * FROM Bills;

 -- Task3
CREATE DATABASE CollegeDB;
USE CollegeDB;
-- Departments Table
CREATE TABLE Departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(100)
);


-- Faculty Table
CREATE TABLE Faculty (
    faculty_id INT PRIMARY KEY AUTO_INCREMENT,
    faculty_name VARCHAR(100),
    dept_id INT,

    FOREIGN KEY (dept_id)
    REFERENCES Departments(dept_id)
);


-- Students Table
CREATE TABLE Students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100),
    dept_id INT,
    year_of_study INT,

    FOREIGN KEY (dept_id)
    REFERENCES Departments(dept_id)
);


-- Courses Table
CREATE TABLE Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100),
    faculty_id INT,

    FOREIGN KEY (faculty_id)
    REFERENCES Faculty(faculty_id)
);


-- Attendance Table
CREATE TABLE Attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    attendance_date DATE,
    status VARCHAR(20),

    FOREIGN KEY (student_id)
    REFERENCES Students(student_id),

    FOREIGN KEY (course_id)
    REFERENCES Courses(course_id)
);


-- Examinations Table
CREATE TABLE Examinations (
    exam_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    marks INT,

    FOREIGN KEY (student_id)
    REFERENCES Students(student_id),

    FOREIGN KEY (course_id)
    REFERENCES Courses(course_id)
);


-- Insert Departments
INSERT INTO Departments (dept_name)
VALUES
('CSE'),
('IT'),
('ECE'),
('EEE'),
('MECH');
-- Insert Faculty
INSERT INTO Faculty
(faculty_name, dept_id)
VALUES
('Ravi', 1),
('Priya', 2),
('Kumar', 3),
('Anitha', 4),
('Suresh', 5);
-- Insert Students
INSERT INTO Students
(student_name, dept_id, year_of_study)
VALUES
('Arun', 1, 3),
('Divya', 2, 2),
('Hari', 3, 1),
('Anu', 4, 4),
('Rahul', 5, 3),
('John', 1, 2),
('Meena', 2, 1),
('Ajay', 3, 4),
('Keerthi', 4, 2),
('Nisha', 5, 1);


-- Insert Courses
INSERT INTO Courses
(course_name, faculty_id)
VALUES
('Java', 1),
('Python', 2),
('DBMS', 3),
('Networks', 4),
('AI', 5);
-- Insert Attendance
INSERT INTO Attendance
(student_id, course_id, attendance_date, status)
VALUES
(1, 1, '2026-08-01', 'Present'),
(2, 2, '2026-08-01', 'Absent'),
(3, 3, '2026-08-01', 'Present'),
(4, 4, '2026-08-01', 'Present'),
(5, 5, '2026-08-01', 'Absent'),
(6, 1, '2026-08-02', 'Present'),
(7, 2, '2026-08-02', 'Present'),
(8, 3, '2026-08-02', 'Absent'),
(9, 4, '2026-08-02', 'Present'),
(10, 5, '2026-08-02', 'Present');
-- Insert Examinations
INSERT INTO Examinations
(student_id, course_id, marks)
VALUES
(1, 1, 85),
(2, 2, 76),
(3, 3, 90),
(4, 4, 82),
(5, 5, 70),
(6, 1, 88),
(7, 2, 91),
(8, 3, 65),
(9, 4, 78),
(10, 5, 84);
SELECT * FROM Departments;
SELECT * FROM Faculty;
SELECT * FROM Students;
SELECT * FROM Courses;
SELECT * FROM Attendance;
SELECT * FROM Examinations;

 -- Task4
CREATE DATABASE EcommerceDB;
USE EcommerceDB;

-- PRODUCTS TABLE
CREATE TABLE Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2),
    stock INT
);

-- CUSTOMERS TABLE
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15),
    address VARCHAR(200)
);

-- ORDERS TABLE
CREATE TABLE Orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    product_id INT,
    quantity INT,
    order_date DATE,
    total_amount DECIMAL(10,2),

    FOREIGN KEY (customer_id)
    REFERENCES Customers(customer_id),

    FOREIGN KEY (product_id)
    REFERENCES Products(product_id)
);
-- PAYMENTS TABLE
CREATE TABLE Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    payment_method VARCHAR(30),
    payment_status VARCHAR(20),
    payment_date DATE,

    FOREIGN KEY (order_id)
    REFERENCES Orders(order_id)
);

-- DELIVERIES TABLE
CREATE TABLE Deliveries (
    delivery_id INT PRIMARY KEY AUTO_INCREMENT,
    payment_id INT,
    delivery_address VARCHAR(200),
    delivery_date DATE,
    delivery_status VARCHAR(30),

    FOREIGN KEY (payment_id)
    REFERENCES Payments(payment_id)
);

-- INSERT PRODUCTS
INSERT INTO Products
(product_name, category, price, stock)
VALUES
('Laptop', 'Electronics', 55000, 10),
('Mobile Phone', 'Electronics', 25000, 20),
('Headphones', 'Electronics', 2000, 30),
('Keyboard', 'Accessories', 1500, 25),
('Mouse', 'Accessories', 800, 40),
('Backpack', 'Bags', 1200, 15),
('Shoes', 'Fashion', 3000, 20),
('Watch', 'Fashion', 2500, 10),
('T-Shirt', 'Clothing', 900, 35),
('Water Bottle', 'Home', 500, 50);

-- INSERT CUSTOMERS
INSERT INTO Customers
(customer_name, email, phone, address)
VALUES
('Arun', 'arun@gmail.com', '9000000001', 'Chennai'),
('Priya', 'priya@gmail.com', '9000000002', 'Madurai'),
('Kumar', 'kumar@gmail.com', '9000000003', 'Salem'),
('Divya', 'divya@gmail.com', '9000000004', 'Trichy'),
('Rahul', 'rahul@gmail.com', '9000000005', 'Coimbatore'),
('Anu', 'anu@gmail.com', '9000000006', 'Erode'),
('Hari', 'hari@gmail.com', '9000000007', 'Vellore'),
('Nisha', 'nisha@gmail.com', '9000000008', 'Chennai'),
('Ajay', 'ajay@gmail.com', '9000000009', 'Madurai'),
('Meena', 'meena@gmail.com', '9000000010', 'Salem');

-- INSERT ORDERS
INSERT INTO Orders
(customer_id, product_id, quantity, order_date, total_amount)
VALUES
(1, 1, 1, '2026-08-01', 55000),
(2, 2, 1, '2026-08-01', 25000),
(3, 3, 2, '2026-08-02', 4000),
(4, 4, 1, '2026-08-02', 1500),
(5, 5, 2, '2026-08-03', 1600),
(6, 6, 1, '2026-08-03', 1200),
(7, 7, 1, '2026-08-04', 3000),
(8, 8, 1, '2026-08-04', 2500),
(9, 9, 2, '2026-08-05', 1800),
(10, 10, 3, '2026-08-05', 1500);


-- INSERT PAYMENTS
INSERT INTO Payments
(order_id, payment_method, payment_status, payment_date)
VALUES
(1, 'UPI', 'Paid', '2026-08-01'),
(2, 'Card', 'Paid', '2026-08-01'),
(3, 'Cash', 'Paid', '2026-08-02'),
(4, 'UPI', 'Pending', '2026-08-02'),
(5, 'Card', 'Paid', '2026-08-03'),
(6, 'UPI', 'Paid', '2026-08-03'),
(7, 'Cash', 'Pending', '2026-08-04'),
(8, 'Card', 'Paid', '2026-08-04'),
(9, 'UPI', 'Paid', '2026-08-05'),
(10, 'Cash', 'Paid', '2026-08-05');


-- INSERT DELIVERIES
INSERT INTO Deliveries
(payment_id, delivery_address, delivery_date, delivery_status)
VALUES
(1, 'Chennai', '2026-08-04', 'Delivered'),
(2, 'Madurai', '2026-08-05', 'Delivered'),
(3, 'Salem', '2026-08-06', 'Delivered'),
(4, 'Trichy', '2026-08-07', 'Pending'),
(5, 'Coimbatore', '2026-08-07', 'Delivered'),
(6, 'Erode', '2026-08-08', 'Shipped'),
(7, 'Vellore', '2026-08-08', 'Pending'),
(8, 'Chennai', '2026-08-09', 'Shipped'),
(9, 'Madurai', '2026-08-09', 'Delivered'),
(10, 'Salem', '2026-08-10', 'Shipped');


SELECT * FROM Products;
SELECT * FROM Customers;
SELECT * FROM Orders;
SELECT * FROM Payments;
SELECT * FROM Deliveries;

 -- Task5
CREATE DATABASE TeaShopDB;
USE TeaShopDB;


-- =========================================
-- EMPLOYEES TABLE
-- =========================================

CREATE TABLE Employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100),
    department VARCHAR(50),
    salary INT,
    city VARCHAR(50)
);


-- =========================================
-- CUSTOMERS TABLE
-- =========================================

CREATE TABLE Customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    phone VARCHAR(15)
);


-- =========================================
-- PRODUCTS TABLE
-- =========================================

CREATE TABLE Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);


-- =========================================
-- BILLING TABLE
-- =========================================

CREATE TABLE Billing (
    bill_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    product_id INT,
    quantity INT,
    total_amount DECIMAL(10,2),

    FOREIGN KEY (customer_id)
    REFERENCES Customers(customer_id),

    FOREIGN KEY (product_id)
    REFERENCES Products(product_id)
);


-- =========================================
-- STOCK TABLE
-- =========================================

CREATE TABLE Stock (
    stock_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    quantity INT,
    stock_date DATE,

    FOREIGN KEY (product_id)
    REFERENCES Products(product_id)
);


-- =========================================
-- DAILY SALES TABLE
-- =========================================

CREATE TABLE DailySales (
    sales_id INT PRIMARY KEY AUTO_INCREMENT,
    bill_id INT,
    sales_date DATE,
    total_sales DECIMAL(10,2),

    FOREIGN KEY (bill_id)
    REFERENCES Billing(bill_id)
);


-- =========================================
-- INSERT EMPLOYEES
-- =========================================

INSERT INTO Employees
(emp_name, department, salary, city)
VALUES
('Arun', 'Sales', 25000, 'Chennai'),
('Priya', 'Purchase', 28000, 'Coimbatore'),
('Vijay', 'Production', 32000, 'Madurai'),
('Sneha', 'Quality', 30000, 'Salem'),
('Rahul', 'Finance', 45000, 'Trichy'),
('Divya', 'HR', 35000, 'Erode'),
('Karthik', 'Marketing', 38000, 'Vellore'),
('Anitha', 'Logistics', 27000, 'Thanjavur'),
('Suresh', 'Research', 50000, 'Tirunelveli'),
('Meena', 'Administration', 33000, 'Chennai');


-- =========================================
-- INSERT CUSTOMERS
-- =========================================

INSERT INTO Customers
(customer_name, phone)
VALUES
('Arun Kumar', '9876543210'),
('Priya', '9123456780'),
('Vijay', '9234567890'),
('Karthik', '9345678901'),
('Divya', '9456789012'),
('Sneha', '9567890123'),
('Rahul', '9678901234'),
('Anitha', '9789012345'),
('Suresh', '9890123456'),
('Meena', '9901234567');


-- =========================================
-- INSERT PRODUCTS
-- =========================================

INSERT INTO Products
(product_name, price)
VALUES
('Green Tea', 120),
('Black Tea', 150),
('Masala Tea', 180),
('Lemon Tea', 100),
('Ginger Tea', 130),
('Herbal Tea', 200),
('Cardamom Tea', 170),
('Jasmine Tea', 220),
('Tulsi Tea', 160),
('Mint Tea', 140);


-- =========================================
-- INSERT BILLING
-- =========================================

INSERT INTO Billing
(customer_id, product_id, quantity, total_amount)
VALUES
(1, 1, 2, 240),
(2, 2, 3, 450),
(3, 3, 2, 360),
(4, 4, 5, 500),
(5, 5, 3, 390),
(6, 6, 2, 400),
(7, 7, 4, 680),
(8, 8, 1, 220),
(9, 9, 3, 480),
(10, 10, 5, 700);


-- =========================================
-- INSERT STOCK
-- =========================================

INSERT INTO Stock
(product_id, quantity, stock_date)
VALUES
(1, 50, '2026-08-01'),
(2, 40, '2026-08-01'),
(3, 35, '2026-08-02'),
(4, 60, '2026-08-02'),
(5, 45, '2026-08-03'),
(6, 30, '2026-08-03'),
(7, 25, '2026-08-04'),
(8, 20, '2026-08-04'),
(9, 35, '2026-08-05'),
(10, 50, '2026-08-05');


-- =========================================
-- INSERT DAILY SALES
-- =========================================

INSERT INTO DailySales
(bill_id, sales_date, total_sales)
VALUES
(1, '2026-08-01', 240),
(2, '2026-08-01', 450),
(3, '2026-08-02', 360),
(4, '2026-08-02', 500),
(5, '2026-08-03', 390),
(6, '2026-08-03', 400),
(7, '2026-08-04', 680),
(8, '2026-08-04', 220),
(9, '2026-08-05', 480),
(10, '2026-08-05', 700);


SELECT * FROM Employees;
SELECT * FROM Customers;
SELECT * FROM Products;
SELECT * FROM Billing;
SELECT * FROM Stock;
SELECT * FROM DailySales;
