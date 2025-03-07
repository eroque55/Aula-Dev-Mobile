import { Request, Response } from "express";
import SelectProductService from "../../service/product/SelectProductService";

export default class SelectProductController {
   async handle(request: Request, response: Response) {
      const id = request.params.id;
      const selectProductService = new SelectProductService();

      const product = await selectProductService.execute(id);

      response.json(product);
   }
}
