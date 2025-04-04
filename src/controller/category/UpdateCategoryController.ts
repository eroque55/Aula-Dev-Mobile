import { Request, Response } from "express";
import UpdateCategoryService from "../../service/category/UpdateCategoryService";

export default class UpdateCategoryController {
   async handle(request: Request, response: Response) {
      try {
         const createCategoryService = new UpdateCategoryService();
         const categoryRequest = request.body;
         const id = request.params.id;
         const category = await createCategoryService.execute({
            ...categoryRequest,
            id,
         });

         response.json(category);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
