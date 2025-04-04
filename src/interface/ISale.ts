import ICustomer from "./ICustomer";
import IProduct from "./IProduct";

interface ISale {
   id?: string;
   date: Date;
   products: IProduct[];
   customer: ICustomer;
   quantity: Number;
   total: Number;
}

export default ISale;
