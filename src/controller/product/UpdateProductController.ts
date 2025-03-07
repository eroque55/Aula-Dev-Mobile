import { Request, Response } from "express";
import UpdateProductService from "../../service/product/UpdateProductService";

export default class UpdateProductController {
   async handle(request: Request, response: Response) {
      const createProductService = new UpdateProductService();
      const productRequest = request.body;
      const id = request.params.id;
      const product = await createProductService.execute({
         ...productRequest,
         id,
      });

      response.json({
         message: `Registro alterado com sucesso: id:${product.id}`,
      });
   }
}
