import { Request, Response } from "express";
import DeleteCustomerService from "../../service/customer/DeleteCustomerService";

export default class DeleteCustomerController {
   async handle(request: Request, response: Response) {
      const deleteCustomerService = new DeleteCustomerService();
      const id = request.params.id;

      const msg = await deleteCustomerService.execute(id);

      response.json(msg);
   }
}
