//1 load .env files into our project 
require('dotenv').config()  

//2 import express
const express=require ('express')

// 10 import db
require('./db/connection')

//import router
const router=require('./routes/router')


//3 create a server application
const server=express()

//4 to store port number
const PORT=5000

//5 to run the server
server.listen(5000,()=>{
    console.log(`Server listening on port ` + PORT);
    })

//6 import cors
const cors =require('cors')
const { default: mongoose } = require('mongoose')

//7 use in server app 
server.use(cors())
server.use(express.json())
server.use(router)

//8 route - localhost://5000
server.get('/',(req,res)=>{
    res.status(200).json('Assessment Response')


})

