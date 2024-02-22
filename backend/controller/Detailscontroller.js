const Product = require("../database/detailsFunction.js");

const Oneproductdetail = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.findAll({ where: { idproduct: id } });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { Oneproductdetail };