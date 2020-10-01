// MODELS
const { Product } = require("../models");

module.exports = {
  async list(req, res, next) {
    try {
      const listProduct = await Product.findAll();
      res.send(listProduct);
    } catch (err) {
      return next(err);
    }
  },
};
