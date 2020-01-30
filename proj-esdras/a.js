var mysql = require('mysql');
var Sequelize = require('sequelize');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
	});

//conexao com banco de dados
con.connect(function(err){
	if(err){
		console.log('- erros na conexao');
	}else{
		console.log('- conexao sucedida');
	}
});

//testando query
var nome_banco = 'bancox';
var criando_banco = 'create database '+nome_banco;
console.log('- teste query: '+criando_banco);

//criando banco de dados
con.query(criando_banco,function(err){
	if(err){
		usando_table();
	}else{
		console.log('- criado com sucesso banco de dados');
		criando_table();
	}
});

//use banco
const sequelize = new Sequelize(nome_banco,'root','',{
  host:'localhost',
  dialect:'mysql'
});

//criando table
var criando_table = function(){
	const nome_table = 'USUARIOS';
	const usuario = sequelize.define(nome_table,{
	  nome:{
	    type:Sequelize.STRING
	  },
	  senha:{
	    type:Sequelize.STRING
	  },
	  telefone:{
	    type:Sequelize.STRING
	  }
	});
	usuario.sync({force:true});
	console.log('- criando table: '+nome_table);
}

//usando table
var usando_table = function(){
	const nome_table = 'USUARIOS';
	const usuario = sequelize.define(nome_table,{
	  nome:{
	    type:Sequelize.STRING
	  },
	  senha:{
	    type:Sequelize.STRING
	  },
	  telefone:{
	    type:Sequelize.STRING
	  }
	});
	console.log('- usando table: '+nome_table);
}
