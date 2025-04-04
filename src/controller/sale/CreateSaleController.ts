import { Request, Response } from "express";
import CreateSaleService from "../../service/sale/CreateSaleService";

export default class CreateSaleController {
   async handle(request: Request, response: Response) {
      try {
         const createSaleService = new CreateSaleService();
         const saleRequest = request.body;
         const sale = await createSaleService.execute(saleRequest);

         response.json(sale);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
