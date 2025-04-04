import { Request, Response } from "express";
import DeleteUserService from "../../service/user/DeleteUserService";

export default class DeleteUserController {
   async handle(request: Request, response: Response) {
      try {
         const deleteUserService = new DeleteUserService();
         const id = request.params.id;

         const msg = await deleteUserService.execute(id);

         response.json(msg);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
