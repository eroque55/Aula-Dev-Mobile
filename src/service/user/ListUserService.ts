import IUser from "../../interface/IUser";

export default class ListUserService {
   async execute() {
      const users: IUser[] = [
         {
            id: "1",
            name: "Roque",
            email: "roque@email.com",
            admin: true,
            password: "senhadoroque",
         },
         {
            id: "2",
            name: "Maka",
            email: "maalau@email.com",
            admin: false,
            password: "senhadomaka",
         },
      ];

      return users;
   }
}
