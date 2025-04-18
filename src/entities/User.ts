import {
   Column,
   CreateDateColumn,
   Entity,
   PrimaryColumn,
   UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
class User {
   @PrimaryColumn()
   readonly id!: string;

   @Column()
   name!: string;

   @Column()
   email!: string;

   @Column()
   admin!: boolean;

   @Column()
   password!: string;

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

export default User;
