import {
   Column,
   CreateDateColumn,
   Entity,
   OneToMany,
   PrimaryColumn,
   UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import Product from "./Product";

@Entity()
class Supplier {
   @PrimaryColumn()
   readonly id!: string;

   @Column()
   name!: string;

   @Column()
   email!: string;

   @Column()
   contact!: string;

   @Column()
   address!: string;

   @OneToMany(() => Product, (product) => product.supplier)
   products!: Product[];

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

export default Supplier;
