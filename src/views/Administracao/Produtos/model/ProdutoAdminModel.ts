/**
 * Modelo de um Produto
 *
 * @author Felipe Shimada
 */
interface ProdutoAdminModel {
    idProduto?: string
    nrPreco: number
    nmProduto: string
    dsProduto: string
    dsImagem: string
    nrQuantidade: number
    feiras?: []
  }
  
  export default ProdutoAdminModel;
  