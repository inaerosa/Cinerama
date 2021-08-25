const express = require('express');
const app = express()
const cors = require('cors'); 
const mongoose = require ('mongoose');
const User = require('./model/User');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/dbCinerama', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("Conexao com o banco estabelecida");
})
.catch(err =>{
    console.log("erro ao conectar com o banco....");
    console.log(err);
})



app.listen (3001, () => {
    console.log("running")
})