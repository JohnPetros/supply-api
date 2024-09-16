
-- Active: 1726017479928@@localhost@3306@db

SHOW GRANTS;
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'root';


CREATE TABLE supliers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    suplier_id INT NOT NULL,
    FOREIGN KEY (suplier_id) REFERENCES supliers(id)
  );

SELECT * FROM products;

SELECT S.*, COUNT(P.id) products_count FROM supliers S
LEFT JOIN products P ON P.suplier_id = S.id
GROUP BY S.id;