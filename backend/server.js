const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT ;
const Routermain = require("./router/routermain");
const Routeruser = require("./router/routeruser");
const RouterSaler = require("./router/routersaler");
const RouterPanier = require("./router/routerPanier");
const Routerwishlist = require("./router/routewishlist");
const RouterRate=require("./router/routerRate")
const RouterPayment=require("./router/routerPayment")
const RouterDetails = require("./router/routerDetails");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.use("/", Routermain);
app.use("/user", Routeruser);
app.use("/saler", RouterSaler);
app.use("/panier", RouterPanier);
app.use("/wishlist", Routerwishlist);
app.use("/rate",RouterRate)
app.use("/flouci",RouterPayment)
app.listen(port, () => {
  console.log("the server is lessting on ", port);
});
