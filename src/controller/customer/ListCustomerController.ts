import { Request, Response } from "express";

class ListCustomerController {
   async handle(request: Request, response: Response) {
      const customers = [
         {
            id: 1,
            name: "Roque",
            phone: "11972775377",
            email: "roque@email.com",
            address: "Rua das flores",
            neighborhood: "Centro",
            city: "Mogi das Cruzes",
            state: "São Paulo",
         },
         {
            id: 2,
            name: "Maka",
            phone: "11912345678",
            email: "maka@email.com",
            address: "Rua das flores",
            neighborhood: "Centro",
            city: "Mogi das Cruzes",
            state: "São Paulo",
         },
      ];
      response.json(customers);
   }
}

export { ListCustomerController };
