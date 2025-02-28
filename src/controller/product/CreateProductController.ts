import { Request, Response } from "express";

class CreateProductController {
   async handle(request: Request, response: Response) {
      const { name, category, description, price } = request.body;

      const product = {
         name,
         category,
         description,
         price,
      };

      response.json({
         message: `Registro incluido com sucesso: ${product.name}`,
      });
   }
}

export { CreateProductController };
