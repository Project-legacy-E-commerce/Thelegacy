const {Payment} = require("../database/sequalise")


const createPayment = (data) => {
    return Payment.create(data)
 }

 module.exports={createPayment}