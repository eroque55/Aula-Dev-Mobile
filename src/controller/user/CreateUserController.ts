import { Request, Response } from "express";
import CreateUserService from "../../service/user/CreateUserService";

export default class CreateUserController {
   async handle(request: Request, response: Response) {
      const createUserService = new CreateUserService();
      const userRequest = request.body;
      const user = await createUserService.execute(userRequest);

      response.json({
         message: `Registro incluido com sucesso: ${user.name}`,
      });
   }
}
