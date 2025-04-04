import { getCustomRepository } from "typeorm";
import ICustomer from "../../interface/ICustomer";
import CustomerRepositories from "../../repositories/CustomerRepositories";

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
      const customerRepository = getCustomRepository(CustomerRepositories);
      const customer = await customerRepository.findOne(id);

      if (!customer) {
         throw new Error("Cliente não encontrado");
      }

      if (name) {
         customer.name = name;
      }

      if (phone) {
         customer.phone = phone;
      }

      if (email) {
         customer.email = email;
      }

      if (address) {
         customer.address = address;
      }

      if (neighborhood) {
         customer.neighborhood = neighborhood;
      }

      if (city) {
         customer.city = city;
      }

      if (state) {
         customer.state = state;
      }

      await customerRepository.update(id || 0, customer);

      return customer;
   }
}
