import { getCustomRepository } from "typeorm";
import IUser from "../../interface/IUser";
import UserRepositories from "../../repositories/UserRepositories";
import { hash } from "bcryptjs";

export default class UpdateUserService {
   async execute({ id, name, admin = false, password }: IUser) {
      const userRepository = getCustomRepository(UserRepositories);
      const user = await userRepository.findOne(id);

      if (!user) {
         throw new Error("Usuário não encontrado");
      }

      if (name) {
         user.name = name;
      }

      if (admin !== undefined) {
         user.admin = admin;
      }

      if (password) {
         user.password = await hash(password, 8);
      }

      await userRepository.update(id || 0, user);

      return user;
   }
}
