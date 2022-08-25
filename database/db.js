const mysql = require ('mysql');
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((error)=>{
    if(error){
        console.log('error al conectar la base de datos');  
        return;
    }
    console.log('¡conectado a la base de datos!');

});

module.exports = connection;