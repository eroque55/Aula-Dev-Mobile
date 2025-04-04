import { Request, Response } from "express";
import DeleteSupplierService from "../../service/supplier/DeleteSupplierService";

export default class DeleteSupplierController {
   async handle(request: Request, response: Response) {
      try {
         const deleteSupplierService = new DeleteSupplierService();
         const id = request.params.id;

         const msg = await deleteSupplierService.execute(id);

         response.json(msg);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
