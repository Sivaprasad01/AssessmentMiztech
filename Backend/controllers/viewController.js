const products=require('../models/table1')
const customer_preferences=require('../models/table2')
const orders=require('../models/table3')

exports.tableOne = async(req,res) =>{
    //logic
    try{
        const alldatas1 = await products.find()
        res.status(200).json(alldatas1)
    }
    catch(error){
        res.status(401).json(error)
        
    }
}


exports.tableTwo = async(req,res) =>{
    //logic
    try{
        const alldatas2 = await customer_preferences.find()
        res.status(200).json(alldatas2)
    }
    catch(error){
        res.status(401).json(error)
        
    }
}


exports.tableThree = async(req,res) =>{
    //logic
    try{
        const alldatas3 = await orders.find()
        res.status(200).json(alldatas3)
    }
    catch(error){
        res.status(401).json(error)
    }
}