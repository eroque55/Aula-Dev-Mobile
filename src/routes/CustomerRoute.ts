import { Router } from "express";
import CustomerController from "../controller/customer";

const customerController = new CustomerController();

const router = Router();

router.get("/:id", customerController.select.handle);
router.get("/", customerController.list.handle);
router.post("/", customerController.create.handle);
router.put("/:id", customerController.update.handle);
router.delete("/:id", customerController.delete.handle);

export default router;
