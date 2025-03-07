import { Request, Response } from "express";
import CreateCustomerService from "../../service/customer/CreateCustomerService";

export default class CreateCustomerController {
   async handle(request: Request, response: Response) {
      const createCustomerService = new CreateCustomerService();
      const customerRequest = request.body;
      const customer = await createCustomerService.execute(customerRequest);

      response.json({
         message: `Registro incluido com sucesso: ${customer.name}`,
      });
   }
}
