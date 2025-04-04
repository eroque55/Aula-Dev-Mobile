import { Router } from "express";
import UserController from "../controller/user";

const userController = new UserController();

const router = Router();

router.get("/:id", userController.select.handle);
router.get("/", userController.list.handle);
router.post("/", userController.create.handle);
router.put("/:id", userController.update.handle);
router.delete("/:id", userController.delete.handle);

export default router;
