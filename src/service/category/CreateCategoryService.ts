import { getCustomRepository } from "typeorm";
import ICategory from "../../interface/ICategory";
import CategoryRepositories from "../../repositories/CategoryRepositories";

export default class CreateCategoryService {
   async execute({ name }: ICategory) {
      if (!name) {
         throw new Error("Nome é obrigatório");
      }

      const categoryRepository = getCustomRepository(CategoryRepositories);

      const category: ICategory = {
         name,
      };

      const newCategory = await categoryRepository.create(category);
      const dbCategory = await categoryRepository.save(newCategory);

      return dbCategory;
   }
}
