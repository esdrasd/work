const mysql = require('mysql');
const Sequelize = require('sequelize');

//connect Database
const con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password:""
});

const n_banco = 'banco';
const sequelize = new Sequelize(n_banco,'root','',{
  host:'localhost',
  dialect:'mysql'
});

const qqq_criar_tabela = 'USUARIOS';
const usuario = sequelize.define(qqq_criar_tabela,{
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

//usuario.sync({force:true});

module.exports={
  Sequelize: Sequelize,
  sequelize: sequelize,
  usuario: usuario
}
