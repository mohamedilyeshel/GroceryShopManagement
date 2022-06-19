const productRoutes = require("../controllers/product.controllers");

const router = require("express").Router();

router.get("/", productRoutes.getProducts);
router.get("/:productId", productRoutes.getProduct);
router.get("/category/:categoryId", productRoutes.getProductsByCategory)
router.delete("/:productId", productRoutes.deleteProduct);
router.put("/:productId", productRoutes.updateProduct);
router.post("/", productRoutes.createProduct);

module.exports = router;