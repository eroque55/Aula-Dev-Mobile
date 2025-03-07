import ICategory from "./ICategory";

interface IProduct {
   id?: string;
   name: string;
   category: ICategory;
   description: string;
   price: number;
}

export default IProduct;
