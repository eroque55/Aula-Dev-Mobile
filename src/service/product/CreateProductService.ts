import IProduct from "../../interface/IProduct";

export default class CreateProductService {
   async execute({ name, category, description, price }: IProduct) {
      if (!name) {
         throw new Error("Nome obrigatório");
      }

      const product = {
         name,
         category,
         description,
         price,
      };

      return product;
   }
}
