import { Request, Response } from "express";
import DeleteCategoryService from "../../service/category/DeleteCategoryService";

export default class DeleteCategoryController {
   async handle(request: Request, response: Response) {
      try {
         const deleteCategoryService = new DeleteCategoryService();
         const id = request.params.id;

         const msg = await deleteCategoryService.execute(id);

         response.json(msg);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
