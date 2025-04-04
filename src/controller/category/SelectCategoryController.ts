import { Request, Response } from "express";
import SelectCategoryService from "../../service/category/SelectCategoryService";

export default class SelectCategoryController {
   async handle(request: Request, response: Response) {
      try {
         const id = request.params.id;
         const selectCategoryService = new SelectCategoryService();

         const category = await selectCategoryService.execute(id);

         response.json(category);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
