import ICategory from "../../interface/ICategory";

export default class ListCategoryService {
   async execute() {
      const categories: ICategory[] = [
         {
            id: "1",
            name: "Vestuario",
         },
         {
            id: "2",
            name: "Eletronicos",
         },
      ];

      return categories;
   }
}
