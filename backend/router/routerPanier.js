const RouterCart = require('express').Router()
const controllercart = require('../controller/Paniercontroller.js')



RouterCart.get('/getAllcarts/:id',controllercart.getAllcarts)
RouterCart.delete('/deletecart/:id/:oneProduct',controllercart.deletecart)
RouterCart.post('/addtoCart/:idu/:idp',controllercart.addtoCart )


module.exports= RouterCart