const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'petshop'
})

connection.connect(function(err) {
    if(err) {
        throw err
    } else {
        console.log("MySQL conectado")
    }
})

module.exports = connection