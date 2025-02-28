import { Request, Response } from "express";

class SelectCustomerController {
   async handle(request: Request, response: Response) {
      const id = request.params.id;

      const customer = {
         id,
         name: "Roque",
         phone: "11972775377",
         email: "roque@email.com",
         address: "Rua das flores",
         neighborhood: "Centro",
         city: "Mogi das Cruzes",
         state: "São Paulo",
      };

      response.json(customer);
   }
}

export { SelectCustomerController };
