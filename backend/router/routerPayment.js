const RouterPayment = require('express').Router()
const controllerpayment = require('../controller/paymentController')

RouterPayment.post('/pay/:idu/:idc',controllerpayment.paycart )

module.exports=RouterPayment