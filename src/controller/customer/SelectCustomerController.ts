import { Request, Response } from "express";
import SelectCustomerService from "../../service/customer/SelectCustomerService";

export default class SelectCustomerController {
   async handle(request: Request, response: Response) {
      try {
         const id = request.params.id;
         const selectCustomerService = new SelectCustomerService();

         const customer = await selectCustomerService.execute(id);

         response.json(customer);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
