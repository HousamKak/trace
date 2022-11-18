const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "tracedb"
})

module.exports = db