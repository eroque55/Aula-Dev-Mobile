import { Request, Response } from "express";
import DeleteCustomerService from "../../service/customer/DeleteCustomerService";

export default class DeleteCustomerController {
   async handle(request: Request, response: Response) {
      try {
         const deleteCustomerService = new DeleteCustomerService();
         const id = request.params.id;

         const msg = await deleteCustomerService.execute(id);

         response.json(msg);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
