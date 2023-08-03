import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdministracaoRestaurantes from "./views/Administracao/Produtos/AdministracaoProdutos";
import Produtos from "./views/Produtos/views/Produto";
import Footer from "./components/footer/Footer"
import EditarAdministracaoProdutos from "./views/Administracao/Produtos/EditarAdministracaoProdutos";

export const Content = () => {

    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
    const shouldRenderFooter = !isAdminRoute;

    return (
        <>
            <Routes>
                <Route path="/produtos" element={<Produtos/> }/>
                <Route path="/admin/produtos"  Component={AdministracaoRestaurantes}/>
                <Route path="/admin/produtos/novo"  Component={EditarAdministracaoProdutos}/>
                <Route path="/admin/produtos/editar/:id"  Component={EditarAdministracaoProdutos}/>
            </Routes>

            {shouldRenderFooter && <Footer />} {/* Renderiza o rodapé, exceto na rota de administração */}
        </>
    )
}