import DiasDaSemanaEnum from "../enums/DiaSemanaEnum"
import EnderecoModel from "./EnderecoModel"
import SituacaoRegistroEnum from "./SituacaoRegistroEnum"

/**
 * Modelo de uma Feira
 *
 * @author Felipe Shimada
 */
interface FeiraAdminModel {
    idFeira?: string
    nmFeira: string
    hrInicio: string
    hrTermino: string
    diasSemana: DiasDaSemanaEnum[]
    endereco: EnderecoModel
    stRegistro: SituacaoRegistroEnum
  }
  
  export default FeiraAdminModel;
  