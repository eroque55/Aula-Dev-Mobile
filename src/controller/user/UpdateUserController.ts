import { Request, Response } from "express";
import UpdateUserService from "../../service/user/UpdateUserService";

export default class UpdateUserController {
   async handle(request: Request, response: Response) {
      const createUserService = new UpdateUserService();
      const userRequest = request.body;
      const id = request.params.id;
      const user = await createUserService.execute({ ...userRequest, id });

      response.json({
         message: `Registro alterado com sucesso: id:${user.id}`,
      });
   }
}
