import { getCustomRepository } from "typeorm";
import CustomerRepositories from "../../repositories/CustomerRepositories";

export default class SelectCustomerService {
   async execute(id: string) {
      const customerRepository = getCustomRepository(CustomerRepositories);
      const customer = await customerRepository.findOne(id);

      if (!customer) {
         return { message: "Produto não encontrado" };
      }

      return customer;
   }
}
