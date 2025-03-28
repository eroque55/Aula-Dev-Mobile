import { Router } from "express";

import CategoryController from "./controller/category";
import CustomerController from "./controller/customer";
import ProductController from "./controller/product";
import SaleController from "./controller/sale";
import UserController from "./controller/user";
import AuthController from "./controller/auth/AuthController";
import ensureAuthenticated from "./middleware/EnsureAutenticated";

const categoryController = new CategoryController();
const customerController = new CustomerController();
const productController = new ProductController();
const saleController = new SaleController();
const userController = new UserController();
const authController = new AuthController();

const router = Router();

router.post("/auth", authController.handle);

router.use(ensureAuthenticated);

router.get("/categories/:id", categoryController.select.handle);
router.get("/categories/", categoryController.list.handle);
router.post("/categories", categoryController.create.handle);
router.put("/categories/:id", categoryController.update.handle);
router.delete("/categories/:id", categoryController.delete.handle);

router.get("/customers/:id", customerController.select.handle);
router.get("/customers/", customerController.list.handle);
router.post("/customers", customerController.create.handle);
router.put("/customers/:id", customerController.update.handle);
router.delete("/customers/:id", customerController.delete.handle);

router.get("/products/:id", productController.select.handle);
router.get("/products/", productController.list.handle);
router.post("/products", productController.create.handle);
router.put("/products/:id", productController.update.handle);
router.delete("/products/:id", productController.delete.handle);

router.get("/sales/:id", saleController.select.handle);
router.get("/sales/", saleController.list.handle);
router.post("/sales", saleController.create.handle);
router.put("/sales/:id", saleController.update.handle);
router.delete("/sales/:id", saleController.delete.handle);

router.get("/users/:id", userController.select.handle);
router.get("/users/", userController.list.handle);
router.post("/users", userController.create.handle);
router.put("/users/:id", userController.update.handle);
router.delete("/users/:id", userController.delete.handle);

export { router };
