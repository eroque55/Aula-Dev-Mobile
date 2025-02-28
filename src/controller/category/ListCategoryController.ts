import { Request, Response } from "express";

class ListCategoryController {
   async handle(request: Request, response: Response) {
      const categories = [
         {
            id: 1,
            name: "Vestuario",
         },
         {
            id: 2,
            name: "Eletronicos",
         },
      ];

      response.json(categories);
   }
}

export { ListCategoryController };
