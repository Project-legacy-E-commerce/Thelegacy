const Routerwishlist = require("express").Router();
const controllerwishlist = require("../controller/wishlistcontroller");

Routerwishlist.get("/getAllwishlist/:id", controllerwishlist.getAllwishlist);
Routerwishlist.post("/add/:id/:iduser", controllerwishlist.Addtowishlist);
Routerwishlist.delete("/deletewishlist/:iduser/:idproduct", controllerwishlist.deletewishlist);
Routerwishlist.post('/toCart/:iduser/:idproduct', controllerwishlist.addToCart)
Routerwishlist.post('/allCart/:iduser/', controllerwishlist.addAllToCart)

module.exports = Routerwishlist;
