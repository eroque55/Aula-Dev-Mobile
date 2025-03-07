import { Request, Response } from "express";
import ListSaleService from "../../service/sale/ListSaleService";

export default class ListSaleController {
   async handle(request: Request, response: Response) {
      const listSaleService = new ListSaleService();

      response.json(await listSaleService.execute());
   }
}
