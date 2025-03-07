import IUser from "../../interface/IUser";

export default class UpdateUserService {
   async execute({ id, name, email, admin = false, password }: IUser) {
      const user = {
         id,
         name,
         email,
         admin,
         password,
      };

      return user;
   }
}
