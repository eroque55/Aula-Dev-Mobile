import ISale from "../../interface/ISale";

export default class ListSaleService {
   async execute() {
      const sales: ISale[] = [
         {
            id: "1",
            date: new Date("2025-03-06"),
            product: [
               {
                  id: "1",
                  name: "Camiseta",
                  category: { name: "Vestuario" },
                  description: "Camiseta preta",
                  price: 30,
               },
               {
                  id: "1",
                  name: "Camiseta",
                  category: { name: "Vestuario" },
                  description: "Camiseta preta",
                  price: 30,
               },
            ],
            customer: {
               id: "1",
               name: "Roque",
               phone: "11972775377",
               email: "roque@email.com",
               address: "Rua das flores",
               neighborhood: "Centro",
               city: "Mogi das Cruzes",
               state: "São Paulo",
            },
            quantity: 1,
            total: 30,
         },
         {
            id: "1",
            date: new Date("2025-03-05"),
            product: [
               {
                  id: "1",
                  name: "Camiseta",
                  category: { name: "Vestuario" },
                  description: "Camiseta preta",
                  price: 30,
               },
               {
                  id: "1",
                  name: "Camiseta",
                  category: { name: "Vestuario" },
                  description: "Camiseta preta",
                  price: 30,
               },
            ],
            customer: {
               id: "1",
               name: "Roque",
               phone: "11972775377",
               email: "roque@email.com",
               address: "Rua das flores",
               neighborhood: "Centro",
               city: "Mogi das Cruzes",
               state: "São Paulo",
            },
            quantity: 1,
            total: 30,
         },
      ];

      return sales;
   }
}
