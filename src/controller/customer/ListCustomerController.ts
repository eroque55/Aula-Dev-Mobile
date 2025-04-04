import { Request, Response } from "express";
import ListCustomerService from "../../service/customer/ListCustomerService";

export default class ListCustomerController {
   async handle(request: Request, response: Response) {
      try {
         const listCustomerService = new ListCustomerService();

         response.json(await listCustomerService.execute());
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
