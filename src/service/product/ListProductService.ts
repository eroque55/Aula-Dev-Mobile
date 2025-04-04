import { getCustomRepository } from "typeorm";
import ProductRepositories from "../../repositories/ProductRepositories";

export default class ListProductService {
   async execute() {
      const productRepository = getCustomRepository(ProductRepositories);
      const products = await productRepository.find();

      return products;
   }
}
