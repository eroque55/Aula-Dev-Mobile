import { Request, Response } from "express";

class SelectProductController {
   async handle(request: Request, response: Response) {
      const id = request.params.id;

      const product = {
         id,
         name: "Camiseta",
         category: "Vestuario",
         description: "Camiseta preta",
         price: 30,
      };

      response.json(product);
   }
}

export { SelectProductController };
