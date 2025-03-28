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
class Category {
   @PrimaryColumn()
   id!: string;

   @Column()
   name!: string;

   @OneToMany(() => Product, (product) => product.category)
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

export default Category;
