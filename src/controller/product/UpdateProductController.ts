import { Request, Response } from "express";

class UpdateProductController {
   async handle(request: Request, response: Response) {
      const { name, category, description, price } = request.body;
      const id = request.params.id;

      const product = {
         id,
         name,
         category,
         description,
         price,
      };

      response.json({
         message: `Registro alterado com sucesso: id:${product.id}`,
      });
   }
}

export { UpdateProductController };
