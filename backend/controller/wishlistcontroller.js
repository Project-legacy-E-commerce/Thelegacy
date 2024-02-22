const Wishlist = require("../database/wishlistFunction");

module.exports = {
  getAllwishlist: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Wishlist.getallwishlist(Number(id));
      res.json(response);
    } catch (err) {
      console.log(err);
    }
  },

  //add a product to the list of wishlist products
  Addtowishlist: async (req, res) => {
    const obj = {
      productIdproduct: +req.params.id,
      userIduser: +req.params.iduser,
    };
    try {
      const newwishlist = await Wishlist.addtowishlist(obj);
      res.status(201).json(newwishlist);
    } catch (err) {
      console.log(err);
    }
  },

  deletewishlist: async (req, res) => {
    
 

    try {
      const del = await Wishlist.deletefromwichlist(req.params.iduser,req.params.idproduct );
      res.status(200).json(del);
    } catch (err) {
      console.log(err);
    }
  },
  addToCart: async (req, res) => {
    const userIduser = req.params.iduser;
    const productIdproduct = req.params.idproduct;
    await Wishlist.addToCart(userIduser, productIdproduct)
      .then(() => res.status(200).send("Added to cart"))
      .catch((error) => res.status(500).json(error));
  },
  addAllToCart: async (req, res) => {
    const userIduser = req.params.iduser;
    await Wishlist.addAllToCart(userIduser)
      .then(() => res.status(200).send("Added ALL to cart"))
      .catch((error) => res.status(500).json(error));
  },
};
