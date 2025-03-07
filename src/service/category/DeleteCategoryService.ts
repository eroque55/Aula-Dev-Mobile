export default class DeleteCategoryService {
   async execute(id: string) {
      return `Categoria excluida com sucesso: ${id}`;
   }
}
