import { getCustomRepository } from "typeorm";
import ProductRepositories from "../../repositories/ProductRepositories";

export default class SelectProductService {
   async execute(id: string) {
      const productRepository = getCustomRepository(ProductRepositories);
      const product = await productRepository.findOne(id);

      if (!product) {
         return { message: "Produto não encontrado" };
      }

      return product;
   }
}
