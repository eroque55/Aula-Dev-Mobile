import {
   Column,
   CreateDateColumn,
   Entity,
   OneToMany,
   PrimaryColumn,
   UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import Sale from "./Sale";

@Entity()
class Customer {
   @PrimaryColumn()
   readonly id!: string;

   @Column()
   name!: string;

   @Column()
   phone!: string;

   @Column()
   email!: string;

   @Column()
   address!: string;

   @Column()
   neighborhood!: string;

   @Column()
   city!: string;

   @Column()
   state!: string;

   @OneToMany(() => Sale, (sale) => sale.customer)
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

export default Customer;
