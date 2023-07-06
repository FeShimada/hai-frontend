import React from "react";
import { Routes, Route } from "react-router-dom";
import Loja from "./views/Loja";

export const Content = () => {
    return (
        <Routes>
            <Route path="/" Component={Loja}/>
        </Routes>
    )
}