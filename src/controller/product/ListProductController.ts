import { Request, Response } from "express";
import ListProductService from "../../service/product/ListProductService";

export default class ListProductController {
   async handle(request: Request, response: Response) {
      const listProductService = new ListProductService();

      response.json(await listProductService.execute());
   }
}
