import { Request, Response } from "express";

class UpdateSaleController {
   async handle(request: Request, response: Response) {
      const { date, product, customer, quantity, total } = request.body;
      const id = request.params.id;

      const sale = {
         id,
         date,
         product,
         customer,
         quantity,
         total,
      };

      response.json({
         message: `Registro alterado com sucesso: id:${sale.id}`,
      });
   }
}

export { UpdateSaleController };
