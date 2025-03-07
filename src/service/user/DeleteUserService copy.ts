export default class DeleteUserService {
   async execute(id: string) {
      return `Usuario excluido com sucesso: ${id}`;
   }
}
