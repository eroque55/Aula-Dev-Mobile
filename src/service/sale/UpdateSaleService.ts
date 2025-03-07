import ISale from "../../interface/ISale";

export default class UpdateSaleService {
   async execute({ id, date, product, customer, quantity, total }: ISale) {
      const sale = {
         id,
         date,
         product,
         customer,
         quantity,
         total,
      };

      return sale;
   }
}
