import ICustomer from "../../interface/ICustomer";

export default class CreateCustomerService {
   async execute({
      name,
      phone,
      email,
      address,
      neighborhood,
      city,
      state,
   }: ICustomer) {
      if (!name) {
         throw new Error("Nome obrigatório");
      }

      const customer = {
         name,
         phone,
         email,
         address,
         neighborhood,
         city,
         state,
      };

      return customer;
   }
}
