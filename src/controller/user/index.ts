import { SelectUserController } from "./SelectUserController";
import { ListUserController } from "./ListUserController";
import { CreateUserController } from "./CreateUserController";
import { UpdateUserController } from "./UpdateUserController";
import { DeleteUserController } from "./DeleteUserController";

export default class UserController {
   select = new SelectUserController();
   list = new ListUserController();
   create = new CreateUserController();
   update = new UpdateUserController();
   delete = new DeleteUserController();
}
