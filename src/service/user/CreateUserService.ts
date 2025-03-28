import IUser from "../../interface/IUser";
import UserRepositories from "../../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

export default class CreateUserService {
   async execute({ name, email, admin = false, password }: IUser) {
      if (!email) {
         throw new Error("E-mail incorreto");
      }
      const userRepository = getCustomRepository(UserRepositories);

      const emailAlreadyExists = await userRepository.findOne({ email });

      if (emailAlreadyExists) {
         throw new Error("E-mail já cadastrado no sistema");
      }

      const user = {
         name,
         email,
         admin,
         password: await hash(password, 8),
      };

      const newUser = await userRepository.create(user);
      const dbUser = await userRepository.save(newUser);

      return dbUser;
   }
}
