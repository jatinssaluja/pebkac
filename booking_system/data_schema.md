# Booking System

## Data schema

```
CREATE DATABASE IF NOT EXISTS booking_system;

USE booking_system;

DROP TABLE IF EXISTS availability;
DROP TABLE IF EXISTS car;
DROP TABLE IF EXISTS car_model;
DROP TABLE IF EXISTS user;

CREATE TABLE user
(
 id INT PRIMARY KEY AUTO_INCREMENT,
 first_name VARCHAR(32) NOT NULL,
 last_name VARCHAR(32) NOT NULL,
 driving_license_number VARCHAR(32) NOT NULL
);

CREATE TABLE car
(
 id INT PRIMARY KEY AUTO_INCREMENT,
 user_id INT NOT NULL,
 car_model_id INT NOT NULL,
 license_plate VARCHAR(32) NOT NULL,
 manufacture_year INT,
 FOREIGN KEY fk_car_user (user_id) 
  REFERENCES user (id)
  ON UPDATE CASCADE
  ON DELETE CASCADE,
 FOREIGN KEY fk_car_car_model (car_model_id) 
  REFERENCES car_model (id)
  ON UPDATE CASCADE
  ON DELETE CASCADE
);

CREATE TABLE availability
(
 id INT PRIMARY KEY AUTO_INCREMENT,
 car_id INT NOT NULL,
 start_time DATETIME NOT NULL,
 status BOOLEAN NOT NULL,
 FOREIGN KEY fk_availability_car (car_id) 
  REFERENCES car (id)
  ON UPDATE CASCADE
  ON DELETE CASCADE
);

CREATE TABLE car_model
(
 id INT PRIMARY KEY AUTO_INCREMENT,
 model_name VARCHAR(32) NOT NULL,
 model_description TEXT
);

```

## Simple Query to show available cars at a given time (even if some bookings have already been made)

```
SELECT 
  cm.model_name, 
  car.license_plate
FROM car 
JOIN availability avail
  ON car.id = avail.car_id
  AND HOUR(avail.start_time) BETWEEN 6 AND 10
JOIN car_model cm
  ON car.car_model_id = cm.id
```

## Why is this solution better than some alternative?

For booking system in the present form, the aforementioned data schema will suffice. However, as the booking system experiences high demand, the option of using RDBMS in conjunction with NoSQL should be taken into consideration.
