import {
   Column,
   CreateDateColumn,
   Entity,
   JoinTable,
   ManyToMany,
   ManyToOne,
   PrimaryColumn,
   UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import Customer from "./Customer";
import Product from "./Product";

@Entity()
class Sale {
   @PrimaryColumn()
   readonly id!: string;

   @Column()
   date!: Date;

   @ManyToMany(() => Product, (product) => product.sales)
   @JoinTable()
   products!: Product[];

   @ManyToOne(() => Customer, (customer) => customer.sales)
   customer!: Customer;

   @Column()
   quantity!: Number;

   @Column()
   total!: Number;

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

export default Sale;
