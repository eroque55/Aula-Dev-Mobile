import { getCustomRepository } from "typeorm";
import UserRepositories from "../../repositories/UserRepositories";

export default class SelectUserService {
   async execute(id: string) {
      const userRepository = getCustomRepository(UserRepositories);
      const user = await userRepository.findOne(id);

      if (!user) {
         throw new Error("Usuário não encontrado");
      }

      return user;
   }
}
