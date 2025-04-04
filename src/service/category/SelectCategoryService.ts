import { getCustomRepository } from "typeorm";
import CategoryRepositories from "../../repositories/CategoryRepositories";

export default class SelectCategoryService {
   async execute(id: string) {
      const categoryRepository = getCustomRepository(CategoryRepositories);
      const category = await categoryRepository.findOne(id);

      if (!category) {
         throw new Error("Categoria não encontrada");
      }

      return category;
   }
}
