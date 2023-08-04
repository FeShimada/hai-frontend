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
    hrInicio: Date | string | null
    hrTermino: Date | string | null
    diasSemana: DiasDaSemanaEnum[]
    endereco: EnderecoModel
    stRegistro: SituacaoRegistroEnum
  }
  
  export default FeiraAdminModel;
  