import { Request, Response } from "express";
import SelectUserService from "../../service/user/SelectUserService";

export default class SelectUserController {
   async handle(request: Request, response: Response) {
      try {
         const id = request.params.id;
         const selectUserService = new SelectUserService();

         const user = await selectUserService.execute(id);

         response.json(user);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
