const RouterRate = require('express').Router()
const ControllerRate=require("../controller/reviewcontroller")

RouterRate.delete('/deleterate/:id',ControllerRate.deleteReview)
RouterRate.post('/addrate/:idu/:idp',ControllerRate.addReview )

module.exports=RouterRate
