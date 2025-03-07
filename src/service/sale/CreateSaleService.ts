import ISale from "../../interface/ISale";

export default class CreateSaleService {
   async execute({ date, product, customer, quantity, total }: ISale) {
      if (!date) {
         throw new Error("Data obrigatório");
      }

      const sale = {
         date,
         product,
         customer,
         quantity,
         total,
      };

      return sale;
   }
}
