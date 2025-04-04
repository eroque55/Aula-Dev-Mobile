import IUser from "../../interface/IUser";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import UserRepositories from "../../repositories/UserRepositories";

export default class PostAuthService {
   async execute(user: IUser) {
      if (!user.email || !user.password) {
         throw new Error("E-mail e senha necessários");
      }
      const userRepository = getCustomRepository(UserRepositories);
      const dbUser = await userRepository.findOne({
         where: { email: user.email },
      });

      if (!dbUser) {
         throw new Error("Usuário não encontrado");
      }

      const passwordMatch = await compare(user.password, dbUser.password);

      if (!passwordMatch) {
         throw new Error("Senha incorreta");
      }

      const auth = sign(
         {
            email: user.email,
         },
         "mobilefatec",
         {
            subject: "other",
            expiresIn: "1d",
         }
      );

      return auth;
   }
}
