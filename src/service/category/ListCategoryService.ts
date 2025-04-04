import { getCustomRepository } from "typeorm";
import CategoryRepositories from "../../repositories/CategoryRepositories";

export default class ListCategoryService {
   async execute() {
      const categoryRepository = getCustomRepository(CategoryRepositories);
      const categories = await categoryRepository.find();

      return categories;
   }
}
