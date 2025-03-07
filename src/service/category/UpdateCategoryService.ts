import ICategory from "../../interface/ICategory";

export default class UpdateCategoryService {
   async execute({ id, name }: ICategory) {
      const category = {
         id,
         name,
      };

      return category;
   }
}
