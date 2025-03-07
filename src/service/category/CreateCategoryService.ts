import ICategory from "../../interface/ICategory";

export default class CreateCategoryService {
   async execute({ name }: ICategory) {
      if (!name) {
         throw new Error("Nome obrigatório");
      }

      const category = {
         name,
      };

      return category;
   }
}
