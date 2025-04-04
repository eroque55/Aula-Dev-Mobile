import { Request, Response } from "express";
import PostAuthService from "../../service/auth/PostAuthService";

export default class AuthController {
   async handle(request: Request, response: Response) {
      try {
         const user = request.body;
         const postAuthService = new PostAuthService();

         const auth = await postAuthService.execute(user);

         response.json(auth);
      } catch (e: any) {
         response.status(400).send(e.message);
      }
   }
}
