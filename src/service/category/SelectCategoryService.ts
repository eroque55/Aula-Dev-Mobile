import ICategory from "../../interface/ICategory";

export default class SelectCategoryService {
   async execute(id: string) {
      const user: ICategory = {
         id,
         name: "Vestuario",
      };

      return user;
   }
}
