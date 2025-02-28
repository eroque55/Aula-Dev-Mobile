import { Request, Response } from "express";

class DeleteCustomerController {
   async handle(request: Request, response: Response) {
      const id = request.params.id;

      response.json({
         message: `Registro excluido com sucesso: ${id}`,
      });
   }
}

export { DeleteCustomerController };
