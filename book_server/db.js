const mysql = require('mysql2')

// connection pool
// which will be used for opening/closing connection(s) with mysql
const pool = mysql.createPool({
  // the database will run in a container with logical name as demodb
  host: 'demodb',
  user: 'root',
  password: 'root',
  database: 'DemoDB',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = pool
