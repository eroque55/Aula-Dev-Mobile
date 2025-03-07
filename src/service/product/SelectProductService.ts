import IProduct from "../../interface/IProduct";

export default class SelectProductService {
   async execute(id: string) {
      const product: IProduct = {
         id,
         name: "Camiseta",
         category: { name: "Vestuario" },
         description: "Camiseta preta",
         price: 30,
      };

      return product;
   }
}
