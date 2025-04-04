import { Request, Response } from "express";
import ListSaleService from "../../service/sale/ListSaleService";

export default class ListSaleController {
   async handle(request: Request, response: Response) {
      try {
         const listSaleService = new ListSaleService();

         response.json(await listSaleService.execute());
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
