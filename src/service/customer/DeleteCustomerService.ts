export default class DeleteCustomerService {
   async execute(id: string) {
      return `Cliente excluido com sucesso: ${id}`;
   }
}
