import { Request, Response } from "express";
import SelectSupplierService from "../../service/supplier/SelectSupplierService";

export default class SelectSupplierController {
   async handle(request: Request, response: Response) {
      try {
         const id = request.params.id;
         const selectSupplierService = new SelectSupplierService();

         const supplier = await selectSupplierService.execute(id);

         response.json(supplier);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
