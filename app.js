const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8081

app.use(bodyParser.urlencoded({extended: true }))

app.get('/', (req, res)=>{
    // const nome = req.params.nome
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/sobre', (req, res)=>{
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get('/blog', (req, res)=>{
    res.send("Bem vindos ao meu blog")
})

app.get('/ola/:cargo/:nome', (req, res)=>{
    res.send("<h1>Ola "+req.params.nome+" </h1>"+"Seu cargo eh "+req.params.cargo)
})


app.listen(port, ()=>{
    console.log("Servidor rodando!")
})