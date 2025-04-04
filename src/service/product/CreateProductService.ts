import { getCustomRepository } from "typeorm";
import IProduct from "../../interface/IProduct";
import ProductRepositories from "../../repositories/ProductRepositories";
import CategoryRepositories from "../../repositories/CategoryRepositories";
import SupplierRepositories from "../../repositories/SupplierRepositories";

export default class CreateProductService {
   async execute({ name, category, description, price, supplier }: IProduct) {
      if (!name) {
         throw new Error("Nome é obrigatório");
      }
      if (!category) {
         throw new Error("Categoria é obrigatória");
      }
      if (!description) {
         throw new Error("Descrição é obrigatória");
      }
      if (!price) {
         throw new Error("Preço é obrigatório");
      }
      if (!supplier) {
         throw new Error("Fornecedor é obrigatório");
      }

      const productRepository = getCustomRepository(ProductRepositories);

      const categoryRepository = getCustomRepository(CategoryRepositories);
      const categoryExists = await categoryRepository.findOne({
         where: { name: category.name },
      });

      if (!categoryExists) {
         throw new Error("Categoria não existe");
      }

      const supplierRepository = getCustomRepository(SupplierRepositories);
      const supplierExists = await supplierRepository.findOne({
         where: { name: supplier.name },
      });

      if (!supplierExists) {
         throw new Error("Fornecedor não existe");
      }

      const product: IProduct = {
         name,
         category: categoryExists,
         description,
         price,
         supplier: supplierExists,
      };

      const newProduct = await productRepository.create(product);
      const dbProduct = await productRepository.save(newProduct);

      return dbProduct;
   }
}
