import { Request, Response } from "express";
import UpdateSupplierService from "../../service/supplier/UpdateSupplierService";

export default class UpdateSupplierController {
   async handle(request: Request, response: Response) {
      try {
         const createSupplierService = new UpdateSupplierService();
         const supplierRequest = request.body;
         const id = request.params.id;
         const supplier = await createSupplierService.execute({
            ...supplierRequest,
            id,
         });

         response.json(supplier);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
