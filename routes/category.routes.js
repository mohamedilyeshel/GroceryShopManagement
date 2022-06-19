const categoryRoutes = require("../controllers/category.controllers");

const router = require("express").Router();

router.get("/", categoryRoutes.getCategories);
router.get("/:categoryId", categoryRoutes.getCategory);
router.delete("/:categoryId", categoryRoutes.deleteCategory);
router.put("/:categoryId", categoryRoutes.updateCategory);
router.post("/", categoryRoutes.createCategory);

module.exports = router;