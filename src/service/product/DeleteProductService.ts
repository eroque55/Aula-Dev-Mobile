export default class DeleteProductService {
   async execute(id: string) {
      return `Produto excluido com sucesso: ${id}`;
   }
}
