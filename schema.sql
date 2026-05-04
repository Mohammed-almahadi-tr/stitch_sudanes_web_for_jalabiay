-- Database Schema for Dishdasha & Jellabiya Platform

CREATE DATABASE IF NOT EXISTS dishdasha_db;
USE dishdasha_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password_hash VARCHAR(255),
  role ENUM('customer', 'tailor', 'admin'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tailors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  bio TEXT,
  location_lat DECIMAL(10,8),
  location_lng DECIMAL(11,8),
  city VARCHAR(100),
  rating_avg DECIMAL(3,2) DEFAULT 0,
  rating_count INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS measurements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  chest_cm DECIMAL(5,2),
  waist_cm DECIMAL(5,2),
  hips_cm DECIMAL(5,2),
  shoulder_cm DECIMAL(5,2),
  height_cm DECIMAL(5,2),
  front_image_url VARCHAR(255),
  side_image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT REFERENCES users(id),
  tailor_id INT REFERENCES tailors(id),
  measurement_id INT REFERENCES measurements(id),
  design_name VARCHAR(100),
  status ENUM('pending','confirmed','in_progress','done') DEFAULT 'pending',
  price DECIMAL(10,2),
  payment_status ENUM('unpaid','paid') DEFAULT 'unpaid',
  stripe_payment_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ratings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT REFERENCES orders(id),
  customer_id INT REFERENCES users(id),
  tailor_id INT REFERENCES tailors(id),
  stars INT CHECK(stars BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS portfolio (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tailor_id INT REFERENCES tailors(id),
  image_url VARCHAR(255),
  description VARCHAR(255)
);

-- Seed Data for Testing
INSERT IGNORE INTO users (id, name, email, password_hash, role) VALUES 
(1, 'Admin User', 'admin@dishdasha.com', 'hashed_pwd_here', 'admin'),
(2, 'Ahmed Al-Tailor', 'ahmed@tailor.com', 'hashed_pwd_here', 'tailor'),
(3, 'Sara Designer', 'sara@tailor.com', 'hashed_pwd_here', 'tailor'),
(4, 'Omer Stitch', 'omer@tailor.com', 'hashed_pwd_here', 'tailor');

INSERT IGNORE INTO tailors (id, user_id, bio, location_lat, location_lng, city, rating_avg, rating_count) VALUES 
(1, 2, 'Expert in traditional Sudanese Jellabiya.', 15.5517, 32.5324, 'Khartoum', 4.8, 120),
(2, 3, 'Modern touches on classic Dishdasha.', 15.5480, 32.5350, 'Khartoum', 4.9, 85),
(3, 4, 'Quick and reliable custom tailoring.', 15.5600, 32.5200, 'Khartoum', 4.5, 42);
