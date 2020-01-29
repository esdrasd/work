var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
	});

con.connect(function(err){	
});

var db = 'bancox';
var q = 'create database '+db;
console.log(q);

con.query(q,function(err){
	if(err){
		console.log('erro')
	}else{
		console.log('connect')
	}
})
