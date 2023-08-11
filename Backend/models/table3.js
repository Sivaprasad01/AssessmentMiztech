//import mongoose 
const mongoose=require('mongoose')


const table3Schema=new mongoose.Schema({

    customer_id:{
        type:String,
        required:true,
    },
    preference:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
    

})

//create a model to store data 
const orders=new mongoose.model("orders",table3Schema)     


//export model
module.exports = orders