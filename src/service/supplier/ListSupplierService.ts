import { getCustomRepository } from "typeorm";
import SupplierRepositories from "../../repositories/SupplierRepositories";

export default class ListSupplierService {
   async execute() {
      const supplierRepository = getCustomRepository(SupplierRepositories);
      const suppliers = await supplierRepository.find();

      return suppliers;
   }
}
