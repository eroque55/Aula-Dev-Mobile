import { getCustomRepository } from "typeorm";
import SaleRepositories from "../../repositories/SaleRepositories";

export default class DeleteSaleService {
   async execute(id: string) {
      const saleRepository = getCustomRepository(SaleRepositories);
      const sale = await saleRepository.findOne(id);

      if (!sale) {
         throw new Error("Venda não encontrada");
      }

      await saleRepository.remove(sale);

      return { message: "Venda deletada com sucesso" };
   }
}
