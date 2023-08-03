import { useFormik } from "formik";
import axios from "axios"
import { useEffect, useState } from "react"
import { Params, useNavigate, useParams } from "react-router-dom";
import ProdutoAdminModel from "./model/ProdutoAdminModel";
import * as Yup from 'yup';
import Swal from "sweetalert2";
import SwalComponent from "../../../components/swal/Swal";
import { Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import LoadingBar from "react-top-loading-bar";
import { styled } from "@mui/material/styles";
import ImageUpload from "../../../components/image-upload/ImageUpload"

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
    content: {
        borderBottom: `1px solid`,
        padding: 25,
        flex: 1,
    },
    gridCell: {
        paddingRight: 25,
        height: 76,
        transition: 'all .2s ease-in-out'
    },
    nothing: {}
}));

const FormContainer = styled(Grid)({
    marginTop: 40,
    background: "#f2f2f2", // Change to a light shade
    padding: "20px 30px", // Reduce lateral padding
    width: '80%',
    borderRadius: 10
});

const CustomTextField = styled(TextField)({
    width: "100%",
    marginBottom: 20
});

const CancelButton = styled(Button)({
    marginRight: 10,
    backgroundColor: "#f44336",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#d32f2f",
    },
});

const FinalizarButton = styled(Button)({
    backgroundColor: "#4caf50",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#43a047",
    },
});

function EditarAdministracaoProdutos() {

    const [progress, setProgress] = useState(0)
    const history = useNavigate();
    const { id }: Readonly<Params<string>> = useParams();
    const [enableReinitialize, setEnableReinitialize] = useState(false);
    const classes = useStyles();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    useEffect(() => {
        if (id) setEnableReinitialize(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (selectedImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFieldValue('dsImagem',reader.result as string);
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setFieldValue('dsImagem','');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImage]);

    const [initialValues, setInitialValues] =
        useState<ProdutoAdminModel>({
            nrPreco: 0,
            nmProduto: '',
            dsProduto: '',
            dsImagem: '',
            nrQuantidade: 0,
            feiras: []
        } as ProdutoAdminModel
        );

    const { values, errors, touched, handleBlur, handleSubmit, setFieldValue } = useFormik<ProdutoAdminModel>({
        validateOnBlur: true,
        enableReinitialize,
        initialValues,
        validationSchema: Yup.object().shape({
            nrPreco: Yup.number().required('Campo obrigatório'),
            nmProduto: Yup.string().required('Campo obrigatório'),
            dsProduto: Yup.string().required('Campo obrigatório'),
            nrQuantidade: Yup.number().required('Campo obrigatório')
        }),
        onSubmit: handleSubmitFormik,
    });

    useEffect(() => {
        if (!enableReinitialize) return;
        setProgress(40)

        axios.get('http://localhost:8080/produto/' + id).then(res => {
            setInitialValues(res.data);
            setProgress(100)
        }).catch(() => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Erro',
                text: 'Produto não encontrado',
                icon: 'error',
            });

            history('/admin/produtos');
        });

        // eslint-disable-next-line
    }, [enableReinitialize])

    const axiosUpdate = (values) => {
        axios.put('http://localhost:8080/produto', values).then(res => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Sucesso',
                text: id ? 'Editado com sucesso' : 'Cadastrado com sucesso',
                icon: 'success'
            });
            history('/admin/produtos');
        }).catch(e => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Erro',
                text: id ? 'Erro ao editar' : 'Erro ao cadastrar',
                icon: 'error',
            })
        })
    }

    const axiosSave = (values) => {
        axios.post('http://localhost:8080/produto', values).then(res => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Sucesso',
                text: id ? 'Editado com sucesso' : 'Cadastrado com sucesso',
                icon: 'success'
            });
            history('/admin/produtos');
        }).catch(e => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Erro',
                text: id ? 'Erro ao editar' : 'Erro ao cadastrar',
                icon: 'error',
            })
        })
    }

    const handleImageChange = (file: File) => {
        setSelectedImage(file);
    };


    return (

        <main style={{ height: '100%' }}>

            <LoadingBar
                color='#000000'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                height={5}
            />

            <section id='formulario' style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <FormContainer container>
                    <Grid item xs={8} className={classes.gridCell}>
                        <CustomTextField
                            name='nmProduto'
                            label='Nome Produto'
                            inputProps={{ maxLength: 200 }}
                            value={values.nmProduto}
                            error={errors.nmProduto !== undefined && touched.nmProduto !== undefined}
                            helperText={errors.nmProduto !== undefined && touched.nmProduto !== undefined ? `${errors.nmProduto}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={2} className={classes.gridCell}>
                        <CustomTextField
                            name='nrQuantidade'
                            label='Quantidade por porção'
                            type='number'
                            value={values.nrQuantidade}
                            error={errors.nrQuantidade !== undefined && touched.nrQuantidade !== undefined}
                            helperText={errors.nrQuantidade !== undefined && touched.nrQuantidade !== undefined ? `${errors.nrQuantidade}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={2} className={classes.gridCell}>
                        <CustomTextField
                            name='nrPreco'
                            label='Preço do Produto'
                            type='number'
                            value={values.nrPreco}
                            error={errors.nrPreco !== undefined && touched.nrPreco !== undefined}
                            helperText={errors.nrPreco !== undefined && touched.nrPreco !== undefined ? `${errors.nrPreco}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} style={{ height: 130 }}>
                        <CustomTextField
                            name='dsProduto'
                            label='Descrição Produto'
                            multiline
                            value={values.dsProduto}
                            error={errors.dsProduto !== undefined && touched.dsProduto !== undefined}
                            helperText={errors.dsProduto !== undefined && touched.dsProduto !== undefined ? `${errors.dsProduto}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <Typography variant='subtitle1'>{values.dsProduto?.length ?? '0'}/400</Typography>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <ImageUpload onChange={handleImageChange} />
                    </Grid>

                    
                </FormContainer>
            </section>

            <CancelButton onClick={() => history('/admin/produtos')}>CANCELAR</CancelButton>
            <FinalizarButton onClick={(e: any) => handleSubmit(e)}>FINALIZAR</FinalizarButton>

        </main>
    )



    async function handleSubmitFormik(values: ProdutoAdminModel): Promise<void> {

        Swal.fire({
            title: 'Carregando...',
            didOpen: () => {
                Swal.showLoading()
            },
            allowEscapeKey: false,
            allowOutsideClick: false,
        })



        id ? axiosUpdate(values) : axiosSave(values)
    }


}



export default EditarAdministracaoProdutos
