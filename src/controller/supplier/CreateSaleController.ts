import { Request, Response } from "express";
import CreateSupplierService from "../../service/supplier/CreateSupplierService";

export default class CreateSupplierController {
   async handle(request: Request, response: Response) {
      try {
         const createSupplierService = new CreateSupplierService();
         const supplierRequest = request.body;
         const supplier = await createSupplierService.execute(supplierRequest);

         response.json(supplier);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
