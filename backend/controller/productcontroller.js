const prod = require('../database/sallerFunction')

module.exports={
    InsertProduct: async (req, res) => {
        const obj = {
          name: req.body.name,
          category: req.body.category,
          rate: req.body.rate,
          status: req.body.status,
          initalprice: req.body.initalprice,
          currentprice: req.body.currentprice,
          imgurlmain: req.body.imgurlmain,
          quantity: req.body.quantity,
          description: req.body.description,
          userIduser : req.params.id,
          image :{
                image1 : req.body.image1,
                image2 : req.body.image2,
                image3 : req.body.image3,
                image4 : req.body.image4
          }
        };
    
        try {
          const createdProduct = await prod.insertProduct(obj);
          await prod.insertImgProduct(req.body.image, createdProduct.idproduct);
          await prod.insertColorProduct(req.body.color, createdProduct.idproduct);
          res.status(200).send('Inserted');
        } catch (err) {
          console.log('Error in inserting product', err);
          res.status(500).send('Internal Server Error');
        }
      },
      UpdateProduct: async (req, res) => {
        const id = req.params.id;
        const obj = {
          name: req.body.name,
          category: req.body.category,
          rate: req.body.rate,
          status: req.body.status,
          initalprice: req.body.initalprice,
          currentprice: req.body.currentprice,
          imgurlmain: req.body.imgurlmain,
          quantity: req.body.quantity,
          description: req.body.description,
        };
    
    
        try {
          await prod.updateProduct(obj, id);
          await prod.updateImgProduct(req.body.image, id);
          await prod.updateColorProduct(req.body.color, id);
          res.status(201).json('Updated');
        } catch (err) {
          console.log('Error in updating product', err);
          res.status(500).send('Internal Server Error');
        }
      },

    DeleteProduct : async (req,res)=>{
        const id = req.params.id
        try{
            const results = prod.deleteProduct(id)
            res.status(203).send('deleted !')
        }
        catch(err){
            console.log('err in delete product',err);
        }
    },
    GetallProduct : async (req,res)=>{
        try{
            const results = await prod.getAllProduct()
            res.status(200).send(results)
        }
        catch(err){
            console.log('err in getting all product ',err);
        }
    },
    GetallProductAvailable : async (req,res)=>{
        try{
            const results = await prod.getAllProductAvailable()
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting all product ',err);
        }
    },
    GetProductByCatigory : async (req,res)=>{
        const cate = req.params.category
        try{
            const results = await prod.getProductByCategory(cate)
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting product categ',err);
        }
    },
    GetProductForPromo : async (req,res)=>{
        try{
            const results = await prod.getProductForPromo()
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting promoted data ',err);
        }
    },
    GetTopRatedProduct : async (req,res)=>{
        try{
            const results = await prod.getTopRatedProduct()
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting promo product',err);
        }
    } ,
    GetProductById : async (req,res)=>{
        const id = req.params.id
        try{
            const results = await prod.getProductById(id)
            console.log(results);
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting product',err);
        }
    },
    GetallProductSaler : async (req,res)=>{
        const id = req.params.id
        try{
            const results = await prod.getallproductsaler(id)
            res.status(200).send(results)

        }
        catch(err){
            console.log(err);
        }
    },
    NewProductsInStore : async(req,res)=>{
       try{
        const results = await prod.newProductsInStore()
        res.status(200).send(results)
       }
       catch(err){
        console.log('err',err);
       }
    },
    NewProductsInStoreuser : async(req,res)=>{
        try{
            const id = req.params.id
            const results = await prod.newProductsInStore(id)
        res.status(200).send(results)
        }
        catch(err){
            console.log(err);
        }
    }

} 