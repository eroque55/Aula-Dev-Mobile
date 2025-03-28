import {
   Column,
   CreateDateColumn,
   Entity,
   ManyToMany,
   ManyToOne,
   PrimaryColumn,
   UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import Category from "./Category";
import Sale from "./Sale";

@Entity()
class Product {
   @PrimaryColumn()
   readonly id!: string;

   @Column()
   name!: string;

   @ManyToOne(() => Category, (category) => category.products)
   category!: Category;

   @Column()
   description!: string;

   @Column()
   price!: number;

   @ManyToMany(() => Sale, (sale) => sale.products)
   sales!: Sale[];

   @CreateDateColumn()
   create_at!: Date;

   @UpdateDateColumn()
   update_at!: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}

export default Product;
