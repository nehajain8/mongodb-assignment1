const employeecontroller = require('../controllers/controller');
const express= require('express');
var routes = express.Router();

// Retrieve all Notes
routes.post('/employees',employeecontroller.create);
routes.post('/result',employeecontroller.findDesignation); 
routes.get('/result/findall',employeecontroller.findall); 
routes.get('/result/employee1',employeecontroller.findemployees1); 
routes.get('/result/employee2',employeecontroller.findemployees2); 
routes.get('/result/employee3',employeecontroller.findemployees3); 
routes.get('/result/employee4',employeecontroller.findemployees4); 
routes.get('/result/employee5',employeecontroller.findemployees5); 
routes.get('/result/employee6',employeecontroller.findemployees6); 
routes.get('/result/employee7',employeecontroller.findemployees7); 
routes.get('/result/employee8',employeecontroller.findemployees8); 
routes.get('/result/employee9',employeecontroller.findemployees9); 
module.exports = routes;