import { Request, Response } from "express";
import UpdateCustomerService from "../../service/customer/UpdateCustomerService";

export default class UpdateCustomerController {
   async handle(request: Request, response: Response) {
      const createCustomerService = new UpdateCustomerService();
      const customerRequest = request.body;
      const id = request.params.id;
      const customer = await createCustomerService.execute({
         ...customerRequest,
         id,
      });

      response.json({
         message: `Registro alterado com sucesso: id:${customer.id}`,
      });
   }
}
