import { Request, Response } from "express";
import CreateUserService from "../../service/user/CreateUserService";

export default class CreateUserController {
   async handle(request: Request, response: Response) {
      try {
         const createUserService = new CreateUserService();
         const userRequest = request.body;
         const user = await createUserService.execute(userRequest);

         response.json(user);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
