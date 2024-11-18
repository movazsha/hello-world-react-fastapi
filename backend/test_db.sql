CREATE DATABASE test_db;
USE test_db;

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO items (name) VALUES ('Apple'), ('Banana'), ('Orange');

