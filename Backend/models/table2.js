//import mongoose 
const mongoose=require('mongoose')


const table2Schema=new mongoose.Schema({

    preference_id:{
        type:String,
        required:true,
    },
    product_id:{
        type:Number,
        required:true,
    }
    

})

//create a model to store data 
const customer_preferences=new mongoose.model("customer_preferences",table2Schema)     


//export model
module.exports = customer_preferences
