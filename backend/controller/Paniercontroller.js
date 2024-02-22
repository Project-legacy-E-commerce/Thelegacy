const Panier = require("../database/panierFunction");

module.exports = {
  getAllcarts: async (req, res) => {
    const {id} = req.params
    try {
      const carts = await Panier.getallpanier(Number (id))
      res.status(200).json(carts)
    } catch (err) {
      console.log(err);
    }
  },

  deletecart: async (req, res) => {
    const { id, oneProduct } = req.params;
    try {
      const basket=await Panier.deletefrompanier(id,oneProduct)
      res.status(200).json(basket)
    } catch (err) {
      console.log(err)
    }
  },
  //add a product to the list of panier products
  addtoCart: async (req, res) => {
    const obj ={
      sum : req.body.sum,
      userIduser : req.params.idu,
      productIdproduct : req.params.idp
    }
    try {
      const newCart = await Panier.addtopanier(obj);
      res.status(201).json(newCart);
    } catch (err) {
      console.log(err);
    }
  }
};
