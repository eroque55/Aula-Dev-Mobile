import { getCustomRepository } from "typeorm";
import CustomerRepositories from "../../repositories/CustomerRepositories";

export default class DeleteCustomerService {
   async execute(id: string) {
      const customerRepository = getCustomRepository(CustomerRepositories);
      const customer = await customerRepository.findOne(id);

      if (!customer) {
         return { message: "Cliente não encontrado" };
      }

      await customerRepository.remove(customer);

      return { message: "Cliente deletado com sucesso" };
   }
}
