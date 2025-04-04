import ICategory from "./ICategory";
import ISupplier from "./ISupplier";

interface IProduct {
   id?: string;
   name: string;
   category: ICategory;
   description: string;
   price: number;
   supplier?: ISupplier;
}

export default IProduct;
