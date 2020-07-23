var MongoClient = require('mongodb').MongoClient;
 //connection with mongoDB
 MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
 //check the connection
 if(err){
 console.log("connection failed.");
}else{
 console.log("successfully connected to mongoDB.");
 });