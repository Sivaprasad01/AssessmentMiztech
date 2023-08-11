//import mongoose 
const mongoose=require('mongoose')


const table1Schema=new mongoose.Schema({

    product_id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
    

})

//create a model to store data 
const products=new mongoose.model("products",table1Schema)     


//export model
module.exports = products