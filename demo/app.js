const express = require('express')
const app = express()
const fs = require('fs')

fs.readFile('html/index.html',(err,data)=>{
    app.get('/',(req,res)=>{
        res.send(data.toString())
    })
})

app.get('/img/mm.jpg',(req,res)=>{
    res.sendFile( __dirname + "/" + "/html/img/mm.jpg" );
    console.log("Request for " + req.url + " received.");
})

app.get('/mp3/mp3.mp3',(req,res)=>{
    res.sendFile( __dirname + "/" + "/html/mp3/mp3.mp3" );
    console.log("Request for " + req.url + " received.");
})

app.get('/ico.ico',(req,res)=>{
    res.sendFile( __dirname + "/" + "/html/ico.ico" );
    console.log("Request for " + req.url + " received.");
})

app.listen(3000,()=>{
    console.log('server is running in 127.0.0.1:3000')
})