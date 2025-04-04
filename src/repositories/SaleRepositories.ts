import { EntityRepository, Repository } from "typeorm";
import Sale from "../entities/Sale";

@EntityRepository(Sale)
class SaleRepositories extends Repository<Sale> {}

export default SaleRepositories;
