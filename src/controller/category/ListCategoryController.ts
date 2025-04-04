import { Request, Response } from "express";
import ListCategoryService from "../../service/category/ListCategoryService";

export default class ListCategoryController {
   async handle(request: Request, response: Response) {
      try {
         const listCategoryService = new ListCategoryService();

         response.json(await listCategoryService.execute());
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
