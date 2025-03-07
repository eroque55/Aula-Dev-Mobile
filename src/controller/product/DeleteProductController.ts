import { Request, Response } from "express";
import DeleteProductService from "../../service/product/DeleteProductService";

export default class DeleteProductController {
   async handle(request: Request, response: Response) {
      const deleteProductService = new DeleteProductService();
      const id = request.params.id;

      const msg = await deleteProductService.execute(id);

      response.json(msg);
   }
}
