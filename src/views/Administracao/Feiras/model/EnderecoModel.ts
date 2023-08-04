import SituacaoRegistroEnum from "./SituacaoRegistroEnum"

/**
 * Modelo de um Endereco
 *
 * @author Felipe Shimada
 */
interface EnderecoModel {
    idEndereco?: string
    rua: string
    numero: number
    bairro: string
    cidade: string
    estado: string
    stRegistro: SituacaoRegistroEnum
  }
  
  export default EnderecoModel;
  