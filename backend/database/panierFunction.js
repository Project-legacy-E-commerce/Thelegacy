const { Panier,Product,ColorProduct,ImgProduct } = require("../database/sequalise.js");


  //get all product from panier
   const getallpanier = async (id) => {
    try{
      console.log(Product.findAll);
    const results = Panier.findAll({
      where: { userIduser: id },
      include: [{ model: Product, include: [ColorProduct, ImgProduct] }],
    });
      console.log('res',results);

    return results 
    }
    catch(err){
      throw err;
    }
  };
  
  
  //to delete one product from panier

   const deletefrompanier =(id,oneProduct)=>{
      return Panier.destroy({
        where: { userIduser:id, productIdproduct: oneProduct }
      });
  }

  //add a product to the list of panier products
  const addtopanier=(carts)=>{
     return Panier.create(carts)
    }
  
module.exports ={getallpanier,deletefrompanier,addtopanier}
