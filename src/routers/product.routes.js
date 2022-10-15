import express from "express";
import {
  createProduct,
  getAllProduct,
  getProductById,
  removeProduct,
  searchProduct,
  updateProduct,
} from "../controllers/product.controllers.js";
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/search", searchProduct);
router.get("/:productID", getProductById);
router.put("/:productID", updateProduct);
router.delete("/:productID", removeProduct);

export default router;
