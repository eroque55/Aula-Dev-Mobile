import { Router } from "express";
import SupplierController from "../controller/supplier";

const supplierController = new SupplierController();

const router = Router();

router.get("/:id", supplierController.select.handle);
router.get("/", supplierController.list.handle);
router.post("/", supplierController.create.handle);
router.put("/:id", supplierController.update.handle);
router.delete("/:id", supplierController.delete.handle);

export default router;
