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

app.get('/', cors(), async (req, res)=> {
    res.send("this is working")
})


app.post("/user", async (req, res) => {
    let {nome, username, email} = req.body;
    const user = new User (nome, username, email);
    console.log(user);
    await user.save();
})

app.put ('/user/:id/fav', async (req, res) => {
    const {id} = req.params;
    const {curtido} = req.body;
    await User.findByIdAndUpdate(id, {curtidos: {curtido}}, {runValidators: true, new: true})
})


app.listen (3001, () => {
    console.log("running")
})