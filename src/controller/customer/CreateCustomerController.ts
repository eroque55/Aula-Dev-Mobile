import { Request, Response } from "express";
import CreateCustomerService from "../../service/customer/CreateCustomerService";

export default class CreateCustomerController {
   async handle(request: Request, response: Response) {
      try {
         const createCustomerService = new CreateCustomerService();
         const customerRequest = request.body;
         const customer = await createCustomerService.execute(customerRequest);

         response.json(customer);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
