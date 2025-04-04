import { getCustomRepository } from "typeorm";
import ISupplier from "../../interface/ISupplier";
import SupplierRepositories from "../../repositories/SupplierRepositories";

export default class CreateSupplierService {
   async execute({ address, contact, email, name }: ISupplier) {
      if (!name) {
         throw new Error("Nome é obrigatório");
      }
      if (!address) {
         throw new Error("Endereço é obrigatório");
      }
      if (!contact) {
         throw new Error("Contato é obrigatório");
      }
      if (!email) {
         throw new Error("Email é obrigatório");
      }

      const supplierRepository = getCustomRepository(SupplierRepositories);

      const supplier: ISupplier = {
         address,
         contact,
         email,
         name,
      };

      const newSupplier = await supplierRepository.create(supplier);
      const dbSupplier = await supplierRepository.save(newSupplier);

      return dbSupplier;
   }
}
