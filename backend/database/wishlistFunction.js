const {
  Wishlist,
  ColorProduct,
  ImgProduct,
  Panier,
} = require("../database/sequalise.js");
const { Product } = require("../database/sequalise.js");
const { User } = require("../database/sequalise.js");
//get all product from wishlist
const getallwishlist = (id) => {
  console.log(Product.findAll, "-----------");
  return Wishlist.findAll({
    where: { userIduser: id },
    include: [{ model: Product, include: [ColorProduct, ImgProduct] }],
  });
};

const addtowishlist = (product) => {
  return Wishlist.create(product);
};

const deletefromwichlist = (iduser, idproduct) => {
  return Wishlist.destroy({
    where: { userIduser: iduser, productIdproduct: idproduct },
  });
};

const addToCart = async (userIduser, productIdproduct) => {
  // First, find a wishlist object with the proper IDs
  const wishlistObject = await Wishlist.findAll({
    where: {
      userIduser: userIduser,
      productIdproduct: productIdproduct
    }
  })

  // Then, add it to the `panier` table (if found above)
  if (wishlistObject.length > 0) {
    await Panier.create({ userIduser: userIduser, productIdproduct: productIdproduct })

    // Finally, remove it from the `wishlist` table
    await Wishlist.destroy({
      where: {
        userIduser: userIduser,
        productIdproduct: productIdproduct
      }
    })
  }
}

const addAllToCart = async (userIduser) => {
  // First, find all wishlist objects with the proper IDs
  const wishlistObjects = await Wishlist.findAll({
    where: {
      userIduser: userIduser,
    }
  })

  // Then, add them to the `panier` table (if found above)
  // And remove them from the `wishlist` table
  for (let element of wishlistObjects) {
    await Panier.create({ userIduser: userIduser, productIdproduct: element.productIdproduct })

    await Wishlist.destroy({
      where: {
        userIduser: userIduser,
        productIdproduct: element.productIdproduct
      }
    })
  }
}

module.exports = {
  getallwishlist,
  addtowishlist,
  deletefromwichlist,
  addToCart,
  addAllToCart
};
