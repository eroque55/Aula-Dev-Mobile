import { Request, Response } from "express";

class CreateSaleController {
   async handle(request: Request, response: Response) {
      const { date, product, customer, quantity, total } = request.body;

      const sale = {
         date,
         product,
         customer,
         quantity,
         total,
      };

      response.json({
         message: `Registro incluido com sucesso: ${sale.product}`,
      });
   }
}

export { CreateSaleController };
