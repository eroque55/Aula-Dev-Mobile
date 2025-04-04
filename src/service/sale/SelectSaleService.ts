import { getCustomRepository } from "typeorm";
import SaleRepositories from "../../repositories/SaleRepositories";

export default class SelectSaleService {
   async execute(id: string) {
      const saleRepository = getCustomRepository(SaleRepositories);
      const sale = await saleRepository.findOne(id);

      if (!sale) {
         throw new Error("Venda não encontrada");
      }

      return sale;
   }
}
