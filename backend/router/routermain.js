const Routermain = require('express').Router()
const controller = require('../controller/controllermain')


Routermain.get('/get',controller.connect)

module.exports = Routermain