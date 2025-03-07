import ICustomer from "../../interface/ICustomer";

export default class SelectCustomerService {
   async execute(id: string) {
      const Customer: ICustomer = {
         id,
         name: "Roque",
         phone: "11972775377",
         email: "roque@email.com",
         address: "Rua das flores",
         neighborhood: "Centro",
         city: "Mogi das Cruzes",
         state: "São Paulo",
      };
      return Customer;
   }
}
