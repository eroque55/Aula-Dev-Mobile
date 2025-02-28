import { SelectCustomerController } from "./SelectCustomerController";
import { ListCustomerController } from "./ListCustomerController";
import { CreateCustomerController } from "./CreateCustomerController";
import { UpdateCustomerController } from "./UpdateCustomerController";
import { DeleteCustomerController } from "./DeleteCustomerController";

export default class CustomerController {
   select = new SelectCustomerController();
   list = new ListCustomerController();
   create = new CreateCustomerController();
   update = new UpdateCustomerController();
   delete = new DeleteCustomerController();
}
