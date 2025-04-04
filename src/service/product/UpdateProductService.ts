import { getCustomRepository } from "typeorm";
import IProduct from "../../interface/IProduct";
import ProductRepositories from "../../repositories/ProductRepositories";
import CategoryRepositories from "../../repositories/CategoryRepositories";

export default class UpdateProductService {
   async execute({ id, name, category, description, price }: IProduct) {
      const productRepository = getCustomRepository(ProductRepositories);
      const product = await productRepository.findOne(id);

      if (!product) {
         throw new Error("Produto não encontrado");
      }

      if (name) {
         product.name = name;
      }

      if (category) {
         const categoryRepository = getCustomRepository(CategoryRepositories);
         const categoryExists = await categoryRepository.findOne(category);

         if (!categoryExists) {
            throw new Error("Categoria não encontrada");
         }

         product.category = categoryExists;
      }

      if (description) {
         product.description = description;
      }

      if (price) {
         product.price = price;
      }

      await productRepository.update(id || 0, product);

      return product;
   }
}
