var MongoClient = require('mongodb').MongoClient;
var dbconfig = require('../config.js');
// Create and Save a new Note
exports.create = (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        var myobj = [
          {
              Ename:"Joe",
              department:"clerical staff",
              designation:"Clerk",
              salary:15000,
              dateofjoining:new Date("Dec 26, 2016"),
              city:"Delhi"
          },
          {
              Ename:"Mark",
              department:"support staff",
              designation:"support",
              salary:30000,
              dateofjoining:new Date("Jan 28, 2016"),
              city:"Bangalore"
          },
          {
              Ename:"Lisa",
              department:"ops staff",
              designation:"ops",
              salary:25000,
              dateofjoining:new Date("Feb 9, 2015"),
              city:"California"
          },
          {
              Ename:"Anne",
              department:"development staff",
              designation:"developer",
              salary:40000,
              dateofjoining:new Date("Jun 2, 2016"),
              city:"Singapore"
          },
          {
              Ename:"Sunny",
              department:"management staff",
              designation:"manager",
              salary:49000,
              dateofjoining:new Date("Mar 3, 2016"),
              city:"Newyork"
          },
          {
              Ename:"Flavi",
              department:"logistic staff",
              designation:"logistic",
              salary:17000,
              dateofjoining:new Date("Sept 28, 2016"),
              city:"Bangalore"
          },
          {
              Ename:"Tim",
              department:"clerical staff",
              designation:"Clerk",
              salary:15000,
              dateofjoining:new Date("July 28, 2017"),
              city:"Delhi"
          },
          {
              Ename:"Anthony",
              department:"support staff",
              designation:"support",
              salary:30000,
              dateofjoining:new Date("Aug 12, 2017"),
              city:"Newyork"
          },
          {
              Ename:"Rose",
              department:"ops staff",
              designation:"ops",
              salary:25000,
              dateofjoining:new Date("Sept 12, 2015"),
              city:"Newyork"
          },
          {
              Ename:"Eliza",
              department:"development staff",
              designation:"developer",
              salary:40000,
              dateofjoining:new Date("Jun 3, 2016"),
              city:"Singapore"
          }
        ];
        dbo.collection("employees").insertMany(myobj, function(err, data) {
          if (err) throw err;
          console.log("Number of documents inserted: " + data.insertedCount);
          res.render('employeedetails',{message:"Number of documents inserted: " + data.insertedCount}); 
          db.close();
        });
    });  

}
exports.findall= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").find({}).toArray(function(err, employee) {
            if (err) throw err;
            if(employee){
              res.render('employeeresult',{employee,message:"employee list"});
            }
            db.close(); 
        });
    });    
}
exports.findDesignation = (req, res) => {
    var employeenm= req.body.employeename;
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").find({Ename:employeenm}, { designation: 1 }).toArray(function(err, employee) {
          if (err) throw err;
          if(employee){
            res.render('employeeresult',{employee,message:"employee found"});
          }
          db.close(); 
        });
    });    
}
exports.findemployees1= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").find({ salary: { $gt: 7000 }}).toArray(function(err, employee) {
          if (err) throw err;
          if(employee){
            res.render('employeeresult',{employee,message:"employee found"});
          }
          db.close(); 
        });
    });    
}
exports.findemployees2= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").find().sort({dateofjoining:1}).toArray(function(err, employee) {
          if (err) throw err;
          if(employee){
            res.render('employeeresult',{employee,message:"employee found"});
          }
          db.close(); 
        });
    });    
}
exports.findemployees3= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").find().sort({salary:1}).toArray(function(err, employee) {
          if (err) throw err;
          if(employee){
            res.render('employeeresult',{employee,message:"employee found"});
          }
          db.close(); 
        });
    });    
}
exports.findemployees4= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").find({ salary: { $gt: 5000, $lt: 40000 }}).toArray(function(err, employee) {
          if (err) throw err;
          if(employee){
            res.render('employeeresult',{employee,message:"employee found"});
          }
          db.close(); 
        });
    });    
}
exports.findemployees5= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").find( { designation: { $ne: "developer" } } ).toArray(function(err, employee) {
          if (err) throw err;
          if(employee){
            res.render('employeeresult',{employee,message:"employee found"});
          }
          db.close(); 
        });
    });    
}
exports.findemployees6= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").find().sort({city:-1}).toArray(function(err, employee) {
          if (err) throw err;
          if(employee){
            res.render('employeeresult',{employee,message:"employee found"});
          }
          db.close(); 
        });
    });    
}
exports.findemployees7= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").find({$and:[{city:"Singapore"},{ salary: { $gt: 7000 }}]}).toArray(function(err, employee) {
          if (err) throw err;
          if(employee){
            res.render('employeeresult',{employee,message:"employee found"});
          }
          db.close(); 
        });
    });    
}
exports.findemployees8= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").remove( { designation: "developer" },function(err, employee) {
            if (err) throw err;
            if(employee){
              res.render('employeeresult',{employee:null,message:"employee removed"});
            }
            db.close(); 
        });
    });    
}
exports.findemployees9= (req, res) => {
    MongoClient.connect(dbconfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("employeedb");
        dbo.collection("employees").drop(function(err, employee) {
            if (err) throw err;
            if(employee){
              res.render('employeeresult',{employee:null,message:"employees deleted"});
            }
            db.close(); 
        });
    });    
}