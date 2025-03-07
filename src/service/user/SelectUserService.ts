import IUser from "../../interface/IUser";

export default class SelectUserService {
   async execute(id: string) {
      const user: IUser = {
         id,
         name: "Roque",
         email: "roque@email.com",
         admin: true,
         password: "senhadoroque",
      };
      return user;
   }
}
