import { Request, Response } from "express";
import ListProductService from "../../service/product/ListProductService";

export default class ListProductController {
   async handle(request: Request, response: Response) {
      try {
         const listProductService = new ListProductService();

         response.json(await listProductService.execute());
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
