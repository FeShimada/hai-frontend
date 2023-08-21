import React, { useEffect, useState } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProdutoAdminModel from "../../Administracao/Produtos/model/ProdutoAdminModel";
import SwalComponent from "../../../components/swal/Swal";
import LoadingBar from "react-top-loading-bar";
import PageTitle from "../../../components/page-title/PageTitle";
import { styled } from "@mui/material/styles";
import { Grid, Typography, ListItem, List } from "@mui/material";
import { formatNumberWithMask } from "../../../components/card/Card";
import './style.css'
import CloseIcon from '@mui/icons-material/Close';

const StyledMain = styled("main")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: theme.spacing(4),
    width: '100%'
}));

const ProductContainer = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: `4px solid #071b24`,
    backgroundColor: "white",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    
    height: '60vh',
    width: '100vh'
}));

const ProductImage = styled("img")({
    maxWidth: "100%",
    maxHeight: "300px",
    border: `2px solid #071B24`,
    verticalAlign:'middle'
});

const ProductTitle = styled(Typography)(({ theme }) => ({
    fontSize: "2.5rem",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: "center",
    color: "black",
}));

const ProductDescription = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: "black",
}));

const ProductInfo = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    color: "black",
}));

export type ViewProdutoProps = {
    onClose: () => void
    idProduto: string | undefined
}

const ViewProduto = (props: ViewProdutoProps) => {

    const { onClose, idProduto } = props

    const [progress, setProgress] = useState(0);
    const [enableReinitialize, setEnableReinitialize] = useState(false);
    const history = useNavigate();
    const [produto, setProduto] = useState<ProdutoAdminModel>();

    useEffect(() => {
        if (idProduto) setEnableReinitialize(true);

        axios
            .get("http://localhost:8080/produto/" + idProduto)
            .then((res) => {
                setProduto(res.data);
                console.log(res.data);
                setProgress(100);
            })
            .catch(() => {
                SwalComponent({
                    showConfirmButton: true,
                    title: "Erro",
                    text: "Falha ao carregar os dados.",
                    icon: "error",
                });

                history("/produtos");
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="popup-wrapper">
            <StyledMain >
                <LoadingBar
                    color="#000000"
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                    height={5}
                />

                <ProductContainer className="popup-content">
                    <button className="close-button" onClick={onClose} style={{ backgroundColor:'white' }}>
                        <CloseIcon style={{backgroundColor:'red', borderRadius: "40%", cursor: 'pointer'}}/>
                    </button>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                            <ProductImage className="align-middle" src={produto?.dsImagem} alt={produto?.nmProduto} />
                        </Grid>

                        <Grid item xs={12} md={1} style={{alignItems: "center", display: "flex", flexDirection: "column",}}>
                            <div id="linha-vertical"></div>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <ProductTitle>{produto?.nmProduto}</ProductTitle>
                            <ProductDescription>{produto?.dsProduto}</ProductDescription>
                            <ProductInfo>Preço: R$ {formatNumberWithMask(produto?.nrPreco)}</ProductInfo>
                            <ProductInfo>Quantidade: {produto?.nrQuantidade}</ProductInfo>
                            <ProductInfo>Feiras Disponíveis:</ProductInfo>
                            <List>
                                {produto?.feiras?.map((feira: { nmFeira: string }, index) => (
                                    <ListItem style={{ color: 'black' }} key={index}>{feira.nmFeira}</ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </ProductContainer>
            </StyledMain>
        </div>
    );
};

export default ViewProduto;
