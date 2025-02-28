import { Request, Response } from "express";

class ListSaleController {
   async handle(request: Request, response: Response) {
      const sales = [
         {
            id: 1,
            date: "27/02/2025",
            product: "Camiseta",
            customer: "Roque",
            quantity: 1,
            total: 30,
         },
         {
            id: 2,
            date: "27/02/2025",
            product: "Calça",
            customer: "Maka",
            quantity: 1,
            total: 30,
         },
      ];

      response.json(sales);
   }
}

export { ListSaleController };
