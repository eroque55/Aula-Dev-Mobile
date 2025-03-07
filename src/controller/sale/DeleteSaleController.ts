import { Request, Response } from "express";
import DeleteSaleService from "../../service/sale/DeleteSaleService";

export default class DeleteSaleController {
   async handle(request: Request, response: Response) {
      const deleteSaleService = new DeleteSaleService();
      const id = request.params.id;

      const msg = await deleteSaleService.execute(id);

      response.json(msg);
   }
}
