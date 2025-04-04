import { Router } from "express";

import AuthController from "./controller/auth/AuthController";
import ensureAuthenticated from "./middleware/EnsureAutenticated";

import UserRouter from "./routes/UserRoute";
import CategoryRouter from "./routes/CategoryRoute";
import CustomerRouter from "./routes/CustomerRoute";
import SaleRouter from "./routes/SaleRoute";
import SupplierRouter from "./routes/SupplierRoute";
import ProductRouter from "./routes/ProductRoute";

const authController = new AuthController();

const router = Router();

router.post("/auth", authController.handle);

router.use(ensureAuthenticated);

router.use("/categories", CategoryRouter);
router.use("/customers", CustomerRouter);
router.use("/products", ProductRouter);
router.use("/sales", SaleRouter);
router.use("/suppliers", SupplierRouter);
router.use("/users", UserRouter);

export { router };
