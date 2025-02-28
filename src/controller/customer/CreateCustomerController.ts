import { Request, Response } from "express";

class CreateCustomerController {
   async handle(request: Request, response: Response) {
      const { name, phone, email, address, neighborhood, city, state } =
         request.body;

      const customer = {
         name,
         phone,
         email,
         address,
         neighborhood,
         city,
         state,
      };

      response.json({
         message: `Registro incluido com sucesso: ${customer.name}`,
      });
   }
}

export { CreateCustomerController };
