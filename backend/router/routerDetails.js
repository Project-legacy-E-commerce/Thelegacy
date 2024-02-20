const RouterDetails = require('express').Router();
const { Oneproductdetail } = require('../controller/Detailscontroller.js'); 

RouterDetails.get('/One/:id', Oneproductdetail);

module.exports = RouterDetails;