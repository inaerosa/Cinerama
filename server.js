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

app.get('/read', async (req, res) =>{
    User.find({}, (err,result) => {
        if (err){
            res.send(err);
        }
        res.send(result);
    })
})


app.post("/insert", async (req, res) => {
    let {name, username, email, password} = req.body;
    const user = new User ({name, username, email, password});
    try{
        await user.save();
        res.send("inserted data");
    } catch(err){
        console.log(err)
    }
})

app.put ('/user/:id/fav', async (req, res) => {
    const {id} = req.params;
    const {curtido} = req.body;
    await User.findByIdAndUpdate(id, {curtidos: {curtido}}, {runValidators: true, new: true})
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndRemove(id).exec();
    res.send('deleted');
})

app.listen (3001, () => {
    console.log("running")
})