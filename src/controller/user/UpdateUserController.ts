import { Request, Response } from "express";

class UpdateUserController {
   async handle(request: Request, response: Response) {
      const { name, email, admin, password } = request.body;
      const id = request.params.id;

      const user = {
         id,
         name,
         email,
         admin,
         password,
      };

      response.json({
         message: `Registro alterado com sucesso: id:${user.id}`,
      });
   }
}

export { UpdateUserController };
