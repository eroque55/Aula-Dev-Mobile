import { SelectSaleController } from "./SelectSaleController";
import { ListSaleController } from "./ListSaleController";
import { CreateSaleController } from "./CreateSaleController";
import { UpdateSaleController } from "./UpdateSaleController";
import { DeleteSaleController } from "./DeleteSaleController";

export default class SaleController {
   select = new SelectSaleController();
   list = new ListSaleController();
   create = new CreateSaleController();
   update = new UpdateSaleController();
   delete = new DeleteSaleController();
}
