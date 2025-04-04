import { Request, Response } from "express";
import CreateCategoryService from "../../service/category/CreateCategoryService";

export default class CreateCategoryController {
   async handle(request: Request, response: Response) {
      try {
         const createCategoryService = new CreateCategoryService();
         const categoryRequest = request.body;
         const category = await createCategoryService.execute(categoryRequest);

         response.json(category);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
