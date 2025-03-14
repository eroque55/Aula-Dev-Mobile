import IUser from "../../interface/IUser";
import { sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";

export default class PostAuthService {
   async execute(user: IUser) {
      if (!user.email || !user.password) {
         throw new Error("E-mail e senha necessários");
      }
      const password = await hash("fatec", 8);
      const passwordMatch = await compare(user.password, password);
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
