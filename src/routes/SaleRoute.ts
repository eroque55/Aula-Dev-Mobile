import { Router } from "express";
import SaleController from "../controller/sale";

const saleController = new SaleController();

const router = Router();

router.get("/:id", saleController.select.handle);
router.get("/", saleController.list.handle);
router.post("/", saleController.create.handle);
router.put("/:id", saleController.update.handle);
router.delete("/:id", saleController.delete.handle);

export default router;
