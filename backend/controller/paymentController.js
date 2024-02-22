const payment=require('../database/paymentFunction')

module.exports={paycart: async (req, res) => {
    const userIduser = req.params.idu;
    const cartIdcart = req.params.idc;
await payment.createPayment({userIduser:userIduser, cartIdcart:cartIdcart})
      .then(() => res.status(200).send("cart payed"))
      .catch((error) => res.status(500).json(error));
  }}