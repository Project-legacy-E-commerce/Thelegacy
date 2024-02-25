const RouterPayment = require('express').Router()
const controllerpayment = require('../controller/paymentController')

RouterPayment.post('/pay/:idu/:idc',controllerpayment.paycart )

// RouterPayment.get('/getpay', controllerpayment)

module.exports=RouterPayment