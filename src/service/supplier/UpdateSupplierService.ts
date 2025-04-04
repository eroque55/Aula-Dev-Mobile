import { getCustomRepository } from "typeorm";
import ISupplier from "../../interface/ISupplier";
import SupplierRepositories from "../../repositories/SupplierRepositories";

export default class UpdateSupplierService {
   async execute({ id, name, address, contact, email }: ISupplier) {
      const supplierRepository = getCustomRepository(SupplierRepositories);
      const supplier = await supplierRepository.findOne(id);

      if (!supplier) {
         throw new Error("Fornecedor não encontrado");
      }

      if (name) {
         supplier.name = name;
      }

      if (address) {
         supplier.address = address;
      }

      if (contact) {
         supplier.contact = contact;
      }

      if (email) {
         supplier.email = email;
      }

      await supplierRepository.update(id || 0, supplier);

      return supplier;
   }
}
