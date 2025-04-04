import { getCustomRepository } from "typeorm";
import ICategory from "../../interface/ICategory";
import CategoryRepositories from "../../repositories/CategoryRepositories";

export default class UpdateCategoryService {
   async execute({ id, name }: ICategory) {
      const categoryRepository = getCustomRepository(CategoryRepositories);
      const category = await categoryRepository.findOne(id);

      if (!category) {
         throw new Error("Categoria não encontrada");
      }

      if (name) {
         category.name = name;
      }

      await categoryRepository.update(id || 0, category);

      return category;
   }
}
