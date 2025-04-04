import { Request, Response } from "express";
import DeleteSaleService from "../../service/sale/DeleteSaleService";

export default class DeleteSaleController {
   async handle(request: Request, response: Response) {
      try {
         const deleteSaleService = new DeleteSaleService();
         const id = request.params.id;

         const msg = await deleteSaleService.execute(id);

         response.json(msg);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
