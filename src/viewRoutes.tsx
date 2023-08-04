import AdminFeira from "./views/Administracao/Feiras/views/AdminFeira";
import EditarAdminFeira from "./views/Administracao/Feiras/views/EditarAdminFeira";
import AdministracaoRestaurantes from "./views/Administracao/Produtos/AdministracaoProdutos";
import EditarAdministracaoProdutos from "./views/Administracao/Produtos/EditarAdministracaoProdutos";


export type ScreenRoutesType = {
    path: string;
    exactPath?: boolean;
    component: (props: any) => JSX.Element;
  };

/**
 * Constante com as definições das rotas das Screens/Views/Telas da aplicação
 */
const viewsRoutes: ScreenRoutesType[] = [

    {
        path: 'produtos',
        exactPath: true,
        component: AdministracaoRestaurantes,
    },
    {
        path: 'produtos/novo',
        component: EditarAdministracaoProdutos,
    },
    {
        path: 'produtos/editar/:id',
        component: EditarAdministracaoProdutos,
    },
    {
        path: 'feiras',
        exactPath: true,
        component: AdminFeira,
    },
    {
        path: 'feiras/novo',
        component: EditarAdminFeira,
    },
    {
        path: 'feiras/editar/:id',
        component: EditarAdminFeira,
    },

]

export default viewsRoutes;