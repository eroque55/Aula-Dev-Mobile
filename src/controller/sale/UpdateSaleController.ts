import { Request, Response } from "express";
import UpdateSaleService from "../../service/sale/UpdateSaleService";

export default class UpdateSaleController {
   async handle(request: Request, response: Response) {
      const createSaleService = new UpdateSaleService();
      const saleRequest = request.body;
      const id = request.params.id;
      const sale = await createSaleService.execute({ ...saleRequest, id });

      response.json({
         message: `Registro alterado com sucesso: id:${sale.id}`,
      });
   }
}
