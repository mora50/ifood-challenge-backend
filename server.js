const express = require('express')

const mongoose = require('mongoose')

const requireDir = require('require-dir')

const cors = require('cors')

//Iniciando o app
const app = express()

//Permite usar dado em formato de json
app.use(express.json())

//Ativando o cors
app.use(cors())

//Iniciando o banco de dados
// mongoose.connect('mongodb://localhost:27017/nodeapi',
//     {useNewUrlParser: true}
// );

// requireDir('./src/models/');


//Rotas
app.use('/api', require('./src/routes'));

app.listen(3003)