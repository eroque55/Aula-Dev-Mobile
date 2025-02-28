import { Request, Response } from "express";

class ListProductController {
   async handle(request: Request, response: Response) {
      const products = [
         {
            id: 1,
            name: "Camiseta",
            category: "Vestuario",
            description: "Camiseta preta",
            price: 30,
         },
         {
            id: 2,
            name: "Calça",
            category: "Vestuario",
            description: "Calça preta",
            price: 30,
         },
      ];
      response.json(products);
   }
}

export { ListProductController };
