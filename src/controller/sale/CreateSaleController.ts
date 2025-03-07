import { Request, Response } from "express";
import CreateSaleService from "../../service/sale/CreateSaleService";

export default class CreateSaleController {
   async handle(request: Request, response: Response) {
      const createSaleService = new CreateSaleService();
      const saleRequest = request.body;
      const sale = await createSaleService.execute(saleRequest);

      response.json({
         message: `Registro incluido com sucesso: ${sale.date}`,
      });
   }
}
