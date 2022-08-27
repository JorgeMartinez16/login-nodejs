//1- invocar express
const express = require('express');
const app  = express();

//2- seteamos urlencoder para capturar datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3-invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//4-el directorio public
app.use('/resources', express.static('public'));
app.use('resources', express.static(__dirname+'/public'))

//5- motor de plantilla
app.set('view engine', 'ejs');

//6- invocamos a bcryptjs para passwords
const bcryptjs = require('bcryptjs');
 
//7-var, de session
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true

}))

//8- invocar modulo de conexion
 
const connection = require('./database/db');
/* console.log(__dirname) */

//9-estableciendo rutas
app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/login', (req, res)=>{
    res.render('login');
})


app.listen(3000, (req, res)=>{
    console.log('server running in http://localhost:3000');
})
