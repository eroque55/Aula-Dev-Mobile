import { Request, Response } from "express";

class UpdateCustomerController {
   async handle(request: Request, response: Response) {
      const { name, phone, email, address, neighborhood, city, state } =
         request.body;
      const id = request.params.id;

      const customer = {
         id,
         name,
         phone,
         email,
         address,
         neighborhood,
         city,
         state,
      };

      response.json({
         message: `Registro alterado com sucesso: id:${customer.id}`,
      });
   }
}

export { UpdateCustomerController };
