import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react"
import Card from "../../components/card/Card";
import ProdutoModel from "./model/produto-model";

export const Produtos = () => {

    const [data, setData] = useState<ProdutoModel[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/produto').then(res => {
            setData(res.data)
            console.log(res)
        }).catch(e => {
            console.log('erro')
        })
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

export default Produtos;
