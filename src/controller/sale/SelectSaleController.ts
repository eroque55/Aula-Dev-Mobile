import { Request, Response } from "express";

class SelectSaleController {
   async handle(request: Request, response: Response) {
      const id = request.params.id;

      const sale = {
         id,
         date: "27/02/2025",
         product: "Camiseta",
         customer: "Roque",
         quantity: 1,
         total: 30,
      };

      response.json(sale);
   }
}

export { SelectSaleController };
