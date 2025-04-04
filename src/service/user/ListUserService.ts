import UserRepositories from "../../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

export default class ListUserService {
   async execute() {
      const userRepository = getCustomRepository(UserRepositories);
      const users = await userRepository.find();

      return users;
   }
}
