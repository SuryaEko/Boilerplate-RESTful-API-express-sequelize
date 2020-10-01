const { ProductController } = require("../controllers");

module.exports = (router) => {
  router.get("/product", ProductController.list);
  router.get("/product/:id", ProductController.detail);
  router.post("/product", ProductController.create);
  router.put("/product/:id", ProductController.update);
  router.delete("/product/:id", ProductController.delete);
};
