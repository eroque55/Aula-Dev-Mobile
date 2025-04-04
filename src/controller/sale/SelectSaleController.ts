import { Request, Response } from "express";
import SelectSaleService from "../../service/sale/SelectSaleService";

export default class SelectSaleController {
   async handle(request: Request, response: Response) {
      try {
         const id = request.params.id;
         const selectSaleService = new SelectSaleService();

         const sale = await selectSaleService.execute(id);

         response.json(sale);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
