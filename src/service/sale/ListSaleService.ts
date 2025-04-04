import { getCustomRepository } from "typeorm";
import SaleRepositories from "../../repositories/SaleRepositories";

export default class ListSaleService {
   async execute() {
      const saleRepository = getCustomRepository(SaleRepositories);
      const sales = await saleRepository.find();

      return sales;
   }
}
