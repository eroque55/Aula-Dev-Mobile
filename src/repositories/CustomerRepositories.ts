import { EntityRepository, Repository } from "typeorm";
import Customer from "../entities/Customer";

@EntityRepository(Customer)
class CustomerRepositories extends Repository<Customer> {}

export default CustomerRepositories;
