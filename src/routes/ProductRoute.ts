import { Router } from "express";
import ProductController from "../controller/product";

const productController = new ProductController();

const router = Router();

router.get("/:id", productController.select.handle);
router.get("/", productController.list.handle);
router.post("/", productController.create.handle);
router.put("/:id", productController.update.handle);
router.delete("/:id", productController.delete.handle);

export default router;
