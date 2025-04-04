import { getCustomRepository } from "typeorm";
import ISale from "../../interface/ISale";
import SaleRepositories from "../../repositories/SaleRepositories";
import CustomerRepositories from "../../repositories/CustomerRepositories";
import ProductRepositories from "../../repositories/ProductRepositories";
import Product from "../../entities/Product";

export default class CreateSaleService {
   async execute({ date, products, customer, quantity, total }: ISale) {
      if (!date) {
         throw new Error("Data é obrigatória");
      }
      if (!customer) {
         throw new Error("Cliente é obrigatório");
      }
      if (!total) {
         throw new Error("Valor total é obrigatório");
      }

      const saleRepository = getCustomRepository(SaleRepositories);

      const customerRepository = getCustomRepository(CustomerRepositories);
      const customerExists = await customerRepository.findOne({
         where: { id: customer.id },
      });

      if (!customerExists) {
         throw new Error("Cliente não existe");
      }

      const productRepository = getCustomRepository(ProductRepositories);

      const productsToSale: Product[] = await Promise.all(
         products.map(async (product) => {
            const productExists = await productRepository.findOne({
               id: product.id,
            });
            if (!productExists) {
               throw new Error(`Produto com ID ${product.id} não existe`);
            }
            return productExists;
         })
      );

      const sale: ISale = {
         date,
         products: productsToSale,
         customer: customerExists,
         quantity,
         total,
      };

      const newSale = await saleRepository.create(sale);
      const dbSale = await saleRepository.save(newSale);

      return dbSale;
   }
}
