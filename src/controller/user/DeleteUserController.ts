import { Request, Response } from "express";
import DeleteUserService from "../../service/user/DeleteUserService copy";

export default class DeleteUserController {
   async handle(request: Request, response: Response) {
      const deleteUserService = new DeleteUserService();
      const id = request.params.id;

      const msg = await deleteUserService.execute(id);

      response.json(msg);
   }
}
