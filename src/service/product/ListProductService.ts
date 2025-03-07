import IProduct from "../../interface/IProduct";

export default class ListProductService {
   async execute() {
      const products: IProduct[] = [
         {
            id: "1",
            name: "Camiseta",
            category: { name: "Vestuario" },
            description: "Camiseta preta",
            price: 30,
         },
         {
            id: "2",
            name: "Calça",
            category: { name: "Vestuario" },
            description: "Calça preta",
            price: 30,
         },
      ];

      return products;
   }
}
