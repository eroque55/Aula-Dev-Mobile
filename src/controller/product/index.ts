import SelectProductController from "./SelectProductController";
import ListProductController from "./ListProductController";
import CreateProductController from "./CreateProductController";
import UpdateProductController from "./UpdateProductController";
import DeleteProductController from "./DeleteProductController";

export default class ProductController {
   select = new SelectProductController();
   list = new ListProductController();
   create = new CreateProductController();
   update = new UpdateProductController();
   delete = new DeleteProductController();
}
