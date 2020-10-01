const { ProductController } = require("../controllers");

module.exports = (router) => {
  router.get("/product", ProductController.list);
};
