import { Request, Response } from "express";

class ListUserController {
   async handle(request: Request, response: Response) {
      const users = [
         {
            id: 1,
            name: "Roque",
            email: "roque@email.com",
            admin: true,
            password: "senhadoroque",
         },
         {
            id: 2,
            name: "Maka",
            email: "maalau@email.com",
            admin: false,
            password: "senhadomaka",
         },
      ];

      response.json(users);
   }
}

export { ListUserController };
