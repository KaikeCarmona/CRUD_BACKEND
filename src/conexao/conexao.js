const mysql = require('mysql2');

// create the connection to database
const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: "Kaikelindo1",
  database: 'crudempresas'
});

module.exports = conexao;