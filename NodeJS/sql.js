var mysql2 = require('mysql2');
var db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rain0000',
    database: 'bookssystem',
    port: '5303'
}); 

db.connect();

module.exports = db;//全局抛出