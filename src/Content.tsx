import React, { useCallback, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Produtos from "./views/Produtos/views/Produto";
import Footer from "./components/footer/Footer"
import AppMainLayout from './AppMainLayout';
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import AdminHeader from "./components/navbar/AdminHeader"

export const Content = () => {

    function Redirect({ to }: any) {
        let navigate = useNavigate();
        const navigateAux = useCallback(navigate, [navigate]);
        useEffect(() => {
          navigateAux(to);
        }, [navigateAux, to]);
        return null;
      }


    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
    const shouldRenderFooter = !isAdminRoute;

    return (
        <>

            <Navbar route="/" path="/" />
            {isAdminRoute && <AdminHeader/>}

            <Routes>
                <Route path='/' element={<Redirect to='/home' />} />
                <Route path="/produtos" element={<Produtos/> }/>
                <Route path='/admin/*' element={<AppMainLayout />} />
                <Route path='/produtos/*' element={<AppMainLayout />} />
            </Routes>

            {shouldRenderFooter && <Footer />} {/* Renderiza o rodapé, exceto na rota de administração */}
        </>
    )
}