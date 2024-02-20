const RouterSaler = require('express').Router()
const controllersaler = require('../controller/productcontroller')

RouterSaler.put('/update/:id',controllersaler.UpdateProduct)
RouterSaler.post('/createprod/:id',controllersaler.InsertProduct)
RouterSaler.delete('/deleteprod/:id',controllersaler.DeleteProduct)

// get all prods in the store 
RouterSaler.get('/getallprod',controllersaler.GetallProduct)
// get prod availables
RouterSaler.get('/availableprod',controllersaler.GetallProductAvailable)

// get product inserted from the spesific saler
RouterSaler.get('/getallprod/:id',controllersaler.GetallProductSaler)

// get products by category
RouterSaler.get('/productcategory/:category',controllersaler.GetProductByCatigory)

// get product with status promo
RouterSaler.get('/promoprod',controllersaler.GetProductForPromo)

// get top rated product 
RouterSaler.get('/toprateprod',controllersaler.GetTopRatedProduct)

// get product by his id 
RouterSaler.get('/getproduct/:id',controllersaler.GetProductById)

// get the newest products inserted by the saler 
RouterSaler.get('/newestproduct/:id',controllersaler.NewProductsInStoreuser)

// get the newest product inserted in general 

RouterSaler.get('/newestproductStore',controllersaler.NewProductsInStore)
module.exports=RouterSaler