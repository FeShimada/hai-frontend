import Sweetalert, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SwalAlert = withReactContent(Sweetalert);

/**
 * Abre um modal do SweetAlert2 com mensagem de sucesso ou erro
 *
 * @author Gabriela Farias <gabriela.farias@kepha.com.br>
 * @param {SweetAlertOptions} [props={}] - Props opcionais para customização
 * @returns {Promise<SweetAlertResult>} Promise para caso o modal tenha confirmação
 */
async function Swal(props: SweetAlertOptions = {}): Promise<SweetAlertResult> {
  return SwalAlert.fire({
    allowEscapeKey: false,
    ...props,
  });
}

export default Swal;
