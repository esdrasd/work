const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//connect banco de dado
const connect = require('./connect.js');

//template engine
app.engine('handlebars', handlebars({defaultlayout: 'main'}));
app.set('view engine', 'handlebars');

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//rotas
app.get('/', function(req, res){
	res.render('formulario');
});

app.post('/add', function(req, res){
	res.send('nome: '+req.body.nome+'<br>senha: '+req.body.senha+'<br>telefone: '+req.body.telefone);
});


app.listen(3000, function(){
	console.log('servidor rodando...');
});
