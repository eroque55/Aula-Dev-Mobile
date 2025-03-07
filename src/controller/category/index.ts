import SelectCategoryController from "./SelectCategoryController";
import ListCategoryController from "./ListCategoryController";
import CreateCategoryController from "./CreateCategoryController";
import UpdateCategoryController from "./UpdateCategoryController";
import DeleteCategoryController from "./DeleteCategoryController";

export default class CategoryController {
   select = new SelectCategoryController();
   list = new ListCategoryController();
   create = new CreateCategoryController();
   update = new UpdateCategoryController();
   delete = new DeleteCategoryController();
}
