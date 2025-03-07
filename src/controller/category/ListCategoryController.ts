import { Request, Response } from "express";
import ListCategoryService from "../../service/category/ListCategoryService";

export default class ListCategoryController {
   async handle(request: Request, response: Response) {
      const listCategoryService = new ListCategoryService();

      response.json(await listCategoryService.execute());
   }
}
