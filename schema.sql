DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT (30) NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
id INT (30) NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL (10,2) NOT NULL,
department_id INT(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee(
id INT (30) NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT (30) NOT NULL,
manager_id INT (30) DEFAULT 0,
PRIMARY KEY (id)
);



SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
