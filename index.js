const express= require('express'); //importing express module
const routes = require('./routers/routes');//importing local module routes
const bodyParser= require('body-parser');
const server = express(); // Creating a server
const mongodb = require('mongodb'); 
const mongoClient = mongodb.MongoClient;
const dbConfig = require('./config.js');
var db;
const port = 3030;


// //EJS template to use.
 server.set('views','./views');
 server.set('view engine','ejs');

// //Parse request of content-type - application/x-www-form-urlencoded
 server.use(bodyParser.urlencoded({extended:true}))

// //Parse request of content-type - application/x-www-form-urlencoded
 server.use(bodyParser.json())

// //To use static files
 server.use('/static',express.static('resources'));



// //listen for requests
 server.listen(3000,() => {
     console.log('Server is listening to port 3000');
 });

// // //Handle routes
// // // define a simple route
 server.get('/', (req, res) => {
    res.render('Home.ejs'); 
 });
 server.get('/search', (req, res) => {
    res.render('search.ejs'); 
 });
 server.use('/', routes);

// //listen for requests
server.listen(port,() => {
    console.log('Server is listening to port 3000');
}); 