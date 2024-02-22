const review = require("../database/reviewFunction")

module.exports={deleteReview: async (req, res) => {
    
 

    try {
      const del = await review.deleteRate(req.params.idproduct );
      res.status(200).json(del);
    } catch (err) {
      console.log(err);
    }
  },
  addReview: async (req, res) => {
    const userIduser = req.params.idu;
    const productIdproduct = req.params.idp;
    const {comment,rate}=req.body
    await review.saveRate({comment:comment,userIduser:userIduser, productIdproduct:productIdproduct,rateofuser:rate})
      .then(() => res.status(200).send("rating added"))
      .catch((error) => res.status(500).json(error));
  }
}