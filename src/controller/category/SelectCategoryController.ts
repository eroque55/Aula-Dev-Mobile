import { Request, Response } from "express";

class SelectCategoryController {
   async handle(request: Request, response: Response) {
      const id = request.params.id;

      const category = {
         id,
         name: "Vestuario",
      };

      response.json(category);
   }
}

export { SelectCategoryController };
