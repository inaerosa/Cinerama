const express = require('express');
const app = express()
const cors = require('cors'); 
const mongoose = require ('mongoose');
const Movie = require('./model/Movie');

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
    Movie.find({}, (err,result) => {
        if (err){
            res.send(err);
        }
        res.send(result);
    })
})


app.post("/insert", async (req, res) => {
    let {id_movie, name, url, status} = req.body;
    const movie = new Movie ({id_movie, name, url, status});
    try{
        await movie.save();
        res.send("inserted data");
    } catch(err){
        console.log(err)
    }
})
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await Movie.findByIdAndDelete(id);
    res.send('deleted')
})

app.listen (3001, () => {
    console.log("running")
})