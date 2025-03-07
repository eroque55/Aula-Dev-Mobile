import { Request, Response } from "express";
import CreateCategoryService from "../../service/category/CreateCategoryService";

export default class CreateCategoryController {
   async handle(request: Request, response: Response) {
      const createCategoryService = new CreateCategoryService();
      const categoryRequest = request.body;
      const category = await createCategoryService.execute(categoryRequest);

      response.json({
         message: `Registro incluido com sucesso: ${category.name}`,
      });
   }
}
