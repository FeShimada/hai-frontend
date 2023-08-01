import React from "react";
import { Routes, Route } from "react-router-dom";
import AdministracaoRestaurantes from "./views/Administracao/Produtos/AdministracaoProdutos";
import Produtos from "./views/Produtos/Produto";

export const Content = () => {
    return (
        <Routes>
            <Route path="/produtos" Component={Produtos}/>
            <Route path="/admin/produtos"  Component={AdministracaoRestaurantes}/>
        </Routes>
    )
}