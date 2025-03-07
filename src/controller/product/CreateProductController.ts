import { Request, Response } from "express";
import CreateProductService from "../../service/product/CreateProductService";

export default class CreateProductController {
   async handle(request: Request, response: Response) {
      const createProductService = new CreateProductService();
      const productRequest = request.body;
      const product = await createProductService.execute(productRequest);

      response.json({
         message: `Registro incluido com sucesso: ${product.name}`,
      });
   }
}
