import { getCustomRepository } from "typeorm";
import ICustomer from "../../interface/ICustomer";
import CustomerRepositories from "../../repositories/CustomerRepositories";

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
         throw new Error("Nome é obrigatório");
      }
      if (!phone) {
         throw new Error("Telefone é obrigatório");
      }
      if (!email) {
         throw new Error("E-mail é obrigatório");
      }

      const customerRepository = getCustomRepository(CustomerRepositories);

      const customer: ICustomer = {
         name,
         phone,
         email,
         address,
         neighborhood,
         city,
         state,
      };

      const newCustomer = await customerRepository.create(customer);
      const dbCustomer = await customerRepository.save(newCustomer);

      return dbCustomer;
   }
}
