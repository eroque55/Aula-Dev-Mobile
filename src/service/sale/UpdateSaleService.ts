import { getCustomRepository } from "typeorm";
import ISale from "../../interface/ISale";
import SaleRepositories from "../../repositories/SaleRepositories";
import CustomerRepositories from "../../repositories/CustomerRepositories";

export default class UpdateSaleService {
   async execute({ id, date, customer, quantity, total }: ISale) {
      const saleRepository = getCustomRepository(SaleRepositories);
      const sale = await saleRepository.findOne(id);

      if (!sale) {
         throw new Error("Venda não encontrada");
      }

      if (date) {
         sale.date = date;
      }

      if (customer) {
         const customerRepository = getCustomRepository(CustomerRepositories);
         const customerExists = await customerRepository.findOne(customer);

         if (!customerExists) {
            throw new Error("Cliente não encontrado");
         }

         sale.customer = customerExists;
      }

      if (quantity) {
         sale.quantity = quantity;
      }

      if (total) {
         sale.total = total;
      }

      await saleRepository.update(id || 0, sale);

      return sale;
   }
}
