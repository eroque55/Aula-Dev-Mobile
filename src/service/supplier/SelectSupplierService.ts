import { getCustomRepository } from "typeorm";
import SupplierRepositories from "../../repositories/SupplierRepositories";

export default class SelectSupplierService {
   async execute(id: string) {
      const supplierRepository = getCustomRepository(SupplierRepositories);
      const supplier = await supplierRepository.findOne(id);

      if (!supplier) {
         throw new Error("Fornecedor não encontrado");
      }

      return supplier;
   }
}
