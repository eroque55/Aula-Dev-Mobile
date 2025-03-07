import { Request, Response } from "express";
import ListCustomerService from "../../service/customer/ListCustomerService";

export default class ListCustomerController {
   async handle(request: Request, response: Response) {
      const listCustomerService = new ListCustomerService();

      response.json(await listCustomerService.execute());
   }
}
