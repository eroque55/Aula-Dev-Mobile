import { Request, Response } from "express";
import ListSupplierService from "../../service/supplier/ListSupplierService";

export default class ListSupplierController {
   async handle(request: Request, response: Response) {
      try {
         const listSupplierService = new ListSupplierService();

         response.json(await listSupplierService.execute());
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
