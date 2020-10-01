// MODELS
const { Product } = require("../models");

// METHODS
const ErrorMethod = require("../methods/ErrorMethod");

module.exports = {
  async list(req, res, next) {
    try {
      const listProduct = await Product.findAll();
      return res.send(listProduct);
    } catch (err) {
      return next(err);
    }
  },
  async detail(req, res, next) {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);
      if (!product) throw new ErrorMethod.NotFound("Product not found!");

      return res.send(product);
    } catch (err) {
      return next(err);
    }
  },
  async create(req, res, next) {
    try {
      const product = Product.build(req.body);
      await product.save();

      return res.send({ success: true });
    } catch (err) {
      return next(err);
    }
  },
  async update(req, res, next) {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);
      product.set(req.body);
      await product.save();

      return res.send({ success: true });
    } catch (err) {
      return next(err);
    }
  },
  async delete(req, res, next) {
    try {
      const productId = req.params.id;
      await Product.destroy({
        where: {
          id: productId,
        },
      });

      return res.send({ success: true });
    } catch (err) {
      return next(err);
    }
  },
};
