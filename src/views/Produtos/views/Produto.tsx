import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react"
import Card from "../../../components/card/Card";
import ProdutoModel from "../model/produto-model";
import PageTitle from "../../../components/page-title/PageTitle"
import { Grid } from "@mui/material";
import LoadingBar from "react-top-loading-bar";


const useStyles = makeStyles((theme: any) => ({
    customGrid: {
        borderBottom: `1px solid ${theme}`,
        padding: 25,
        flex: 1
    },
    container: {
        margin: "0 auto", // Centraliza o container horizontalmente
        maxWidth: 1200, // Define a largura máxima do container
        padding: "0 20px", // Adiciona espaçamento à esquerda e à direita do container
    },
    nothing: {}
}));

export const Produtos = () => {

    const [data, setData] = useState<ProdutoModel[]>([]);
    const classes = useStyles();
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress(40)
        axios.get('http://localhost:8080/produto').then(res => {
            setData(res.data)
            console.log(res)
        }).catch(e => {
            console.log('erro')
        })

        setProgress(100)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main style={{ height: '100%' }}>

            <LoadingBar
                color='#000000'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                height={5}
            />

            <section>
                <PageTitle title="Produtos" />
            </section>

            <Grid item xs={12} style={{ borderBottom: `1px solid` }} />

            <section>
                <div className={classes.container}>
                    <Grid container spacing={2} className={classes.customGrid}>
                        {
                            data.map((e: ProdutoModel) => (
                                <Grid item xs={6} sm={4} md={4} key={e.idProduto}>
                                    <Card
                                        title={e.nmProduto}
                                        description={e.dsProduto}
                                        imageUrl={e.dsImagem}
                                        price={e.nrPreco}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </section>

        </main>
    )
}

export default Produtos;
