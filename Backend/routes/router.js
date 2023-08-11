
// =>import express
const express= require('express')

const viewController=require('../controllers/viewController')

// =>using express, create an object for router class inorder to setup path 
const router = new express.Router()

    //api- getalldata request
    router.get('/all-1',viewController.tableOne)
    router.get('/all-2',viewController.tableTwo)
    router.get('/all-3',viewController.tableThree)

//export router
module.exports=router

