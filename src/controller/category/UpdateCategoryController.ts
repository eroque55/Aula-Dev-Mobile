import { Request, Response } from "express";
import UpdateCategoryService from "../../service/category/UpdateCategoryService";

export default class UpdateCategoryController {
   async handle(request: Request, response: Response) {
      const createCategoryService = new UpdateCategoryService();
      const categoryRequest = request.body;
      const id = request.params.id;
      const category = await createCategoryService.execute({
         ...categoryRequest,
         id,
      });

      response.json({
         message: `Registro alterado com sucesso: id:${category.id}`,
      });
   }
}
