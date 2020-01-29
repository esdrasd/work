
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });
  
try{
con.connect(function(err) {    
  con.query("create DATABASE bancox", function (err, result) {   
    console.log('confirmado')     
  });
});

}catch(err){
  console.log('ja existe Database')
  console.log('motivo do erro: '+err)

}