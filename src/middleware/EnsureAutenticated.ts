import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
   email: string;
   sub: string;
}

export default function ensureAuthenticated(
   request: Request,
   response: Response,
   next: NextFunction
) {
   const authToken = request.headers.authorization;

   if (!authToken) {
      response.status(401).end();
   } else {
      const [, token] = authToken.split(" ");
      try {
         const { sub, email } = verify(token, "mobilefatec") as IPayload;

         next();
      } catch (e: any) {
         response.status(401).end(e.message);
      }
   }
}
