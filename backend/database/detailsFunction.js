const Product = require ('../database/sequalise.js')

const One = (id) => {
  return Product.findOne({
    where: { idproduct: id },
    include: 'ImgProduct'
  });
};

module.exports = One;