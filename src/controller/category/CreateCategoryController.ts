import { Request, Response } from "express";

class CreateCategoryController {
   async handle(request: Request, response: Response) {
      const { name } = request.body;

      const category = {
         name,
      };

      response.json({
         message: `Registro incluido com sucesso: ${category.name}`,
      });
   }
}

export { CreateCategoryController };
