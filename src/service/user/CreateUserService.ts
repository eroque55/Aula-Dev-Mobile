import IUser from "../../interface/IUser";

export default class CreateUserService {
   async execute({ name, email, admin = false, password }: IUser) {
      if (!email) {
         throw new Error("E-mail incorreto");
      }

      const user = {
         name,
         email,
         admin,
         password,
      };

      return user;
   }
}
