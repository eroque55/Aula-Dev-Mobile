import IProduct from "../../interface/IProduct";

export default class UpdateProductService {
   async execute({ id, name, category, description, price }: IProduct) {
      const product = {
         id,
         name,
         category,
         description,
         price,
      };

      return product;
   }
}
