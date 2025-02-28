import { Request, Response } from "express";

class SelectUserController {
   async handle(request: Request, response: Response) {
      const id = request.params.id;

      const user = {
         id,
         name: "Roque",
         email: "roque@email.com",
         admin: true,
         password: "senhadoroque",
      };

      response.json(user);
   }
}

export { SelectUserController };
