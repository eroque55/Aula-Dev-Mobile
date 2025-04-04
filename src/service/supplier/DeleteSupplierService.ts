import { getCustomRepository } from "typeorm";
import SupplierRepositories from "../../repositories/SupplierRepositories";

export default class DeleteSupplierService {
   async execute(id: string) {
      const supplierRepository = getCustomRepository(SupplierRepositories);
      const supplier = await supplierRepository.findOne(id);

      if (!supplier) {
         throw new Error("Fornecedor não encontrado");
      }

      await supplierRepository.remove(supplier);

      return { message: "Fornecedor deletado com sucesso" };
   }
}
