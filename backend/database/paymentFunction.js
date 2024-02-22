const {Payment, Panier} = require("../database/sequalise")


const createPayment = (data) => {
    return Payment.create(data)
 }

 const getPayment = (id) => {
    return Payment.findAll({where:{userIduser: id}, include: Panier})
 }

 module.exports={createPayment, getPayment}