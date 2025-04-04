import { Router } from "express";
import CategoryController from "../controller/category";

const categoryController = new CategoryController();

const router = Router();

router.get("/:id", categoryController.select.handle);
router.get("/", categoryController.list.handle);
router.post("/", categoryController.create.handle);
router.put("/:id", categoryController.update.handle);
router.delete("/:id", categoryController.delete.handle);

export default router;
