import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react"
import Card from "../components/card/Card";
import ProdutoModel from "./model/loja";

export const Loja = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'http://localhost:8080/produto'
            const response = await fetch(url)
            const objJson = await response.json()
            setData(objJson)
        }
        fetchApi()
    }, [])

    return (
        <div>
            <Grid container spacing={2}>
                {
                    data.map((e: ProdutoModel) => (
                        <Grid item xs={12} sm={6} md={4} key={e.idProduto}>
                            <Card
                                title={e.nmProduto}
                                description={e.dsProduto}
                                imageUrl={e.dsImagem}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Loja;
