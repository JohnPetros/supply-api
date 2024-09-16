import mysql from 'mysql2/promise'

const database = await mysql.createConnection({
  host: process.env.MYSQL_DATABASE_HOST,
  user: process.env.MYSQL_DATABASE_USER,
  password: process.env.MYSQL_DATABASE_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
})



try {
  await database.query('DROP TABLE IF EXISTS products;')
  await database.query('DROP TABLE IF EXISTS supliers;')

  await database.query(`CREATE TABLE IF NOT EXISTS supliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );`)
  await database.query(`CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    suplier_id INT NOT NULL,
    FOREIGN KEY (suplier_id) REFERENCES supliers(id)
  );`)

  await database.query('DELETE FROM products;')
  await database.query('DELETE FROM supliers;')

  await database.query(`INSERT INTO supliers (name) 
  VALUES
    ('Fornecedor 1'),
    ('Fornecedor 2'),
    ('Fornecedor 3');`)
  await database.query(`INSERT INTO products (name, price, suplier_id) 
  VALUES
    ('Produto 1', 99.99, 1),
    ('Produto 2', 49.95, 1),
    ('Produto 3', 79.99, 2),
    ('Produto 4', 129.99, 2),
    ('Produto 5', 39.99, 3);`)
} catch (error) {
  throw new Error(error)
}

export { database }
