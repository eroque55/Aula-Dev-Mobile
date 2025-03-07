import { Request, Response } from "express";
import ListUserService from "../../service/user/ListUserService";

export default class ListUserController {
   async handle(request: Request, response: Response) {
      const listUserService = new ListUserService();

      response.json(await listUserService.execute());
   }
}
