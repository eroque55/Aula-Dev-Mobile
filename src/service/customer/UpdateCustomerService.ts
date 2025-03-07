import ICustomer from "../../interface/ICustomer";

export default class UpdateCustomerService {
   async execute({
      id,
      name,
      phone,
      email,
      address,
      neighborhood,
      city,
      state,
   }: ICustomer) {
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

      return customer;
   }
}
