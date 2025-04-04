import { Request, Response } from "express";
import UpdateProductService from "../../service/product/UpdateProductService";

export default class UpdateProductController {
   async handle(request: Request, response: Response) {
      try {
         const createProductService = new UpdateProductService();
         const productRequest = request.body;
         const id = request.params.id;
         const product = await createProductService.execute({
            ...productRequest,
            id,
         });

         response.json(product);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
