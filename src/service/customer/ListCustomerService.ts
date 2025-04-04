import { getCustomRepository } from "typeorm";
import CustomerRepositories from "../../repositories/CustomerRepositories";

export default class ListCustomerService {
   async execute() {
      const customerRepository = getCustomRepository(CustomerRepositories);
      const customers = await customerRepository.find();

      return customers;
   }
}
