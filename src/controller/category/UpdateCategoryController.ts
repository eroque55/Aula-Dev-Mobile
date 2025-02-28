import { Request, Response } from "express";

class UpdateCategoryController {
   async handle(request: Request, response: Response) {
      const { name } = request.body;
      const id = request.params.id;

      const category = {
         id,
         name,
      };

      response.json({
         message: `Registro alterado com sucesso: id:${category.id}`,
      });
   }
}

export { UpdateCategoryController };
