import { useFormik } from "formik";
import axios from "axios"
import { useEffect, useState } from "react"
import { Params, useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import Swal from "sweetalert2";
import SwalComponent from "../../../../components/swal/Swal";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import LoadingBar from "react-top-loading-bar";
import { styled } from "@mui/material/styles";
import FeiraAdminModel from "../model/FeiraAdminModel";
import SituacaoRegistroEnum from "../model/SituacaoRegistroEnum";
import PageTitle from "../../../../components/page-title/PageTitle";
import InputMask from "react-input-mask";
import EditarDiasSemanaFeira from "./EditarDiasSemanaFeira";

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

function EditarAdminFeira() {

    const [progress, setProgress] = useState(0)
    const history = useNavigate();
    const { id }: Readonly<Params<string>> = useParams();
    const [enableReinitialize, setEnableReinitialize] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        if (id) {
            setEnableReinitialize(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [initialValues, setInitialValues] =
        useState<FeiraAdminModel>({
            nmFeira: '',
            hrInicio: '',
            hrTermino: '',
            diasSemana: [],
            endereco: {
                rua: '',
                numero: 0,
                bairro: '',
                cidade: '',
                estado: '',
                stRegistro: SituacaoRegistroEnum.CREATE
            },
            stRegistro: SituacaoRegistroEnum.CREATE
        } as FeiraAdminModel
        );

    const { values, errors, touched, handleBlur, handleSubmit, setFieldValue } = useFormik<FeiraAdminModel>({
        validateOnBlur: true,
        enableReinitialize,
        initialValues,
        validationSchema: Yup.object().shape({
            nmFeira: Yup.string().required('Campo obrigatório')
        }),
        onSubmit: handleSubmitFormik,
    });

    useEffect(() => {
        if (!enableReinitialize) return;
        setProgress(40)

        axios.get('http://localhost:8080/feira/' + id).then(res => {
            setInitialValues(res.data);
            setProgress(100)
        }).catch(() => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Erro',
                text: 'Feira não encontrada',
                icon: 'error',
            });

            history('/admin/feiras');
        });

        // eslint-disable-next-line
    }, [enableReinitialize])

    const axiosUpdate = (values: FeiraAdminModel) => {

        values.endereco.stRegistro = SituacaoRegistroEnum.UPDATE

        axios.put('http://localhost:8080/feira', values).then(res => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Sucesso',
                text: id ? 'Editado com sucesso' : 'Cadastrado com sucesso',
                icon: 'success'
            });
            history('/admin/feiras');
        }).catch(e => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Erro',
                text: id ? 'Erro ao editar' : 'Erro ao cadastrar',
                icon: 'error',
            })
        })
    }

    const axiosSave = (values: FeiraAdminModel) => {

        values.endereco.stRegistro = SituacaoRegistroEnum.CREATE

        axios.post('http://localhost:8080/feira', values).then(res => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Sucesso',
                text: id ? 'Editado com sucesso' : 'Cadastrado com sucesso',
                icon: 'success'
            });
            history('/admin/feiras');
        }).catch(e => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Erro',
                text: id ? 'Erro ao editar' : 'Erro ao cadastrar',
                icon: 'error',
            })
        })
    }



    let mask = '12:34';
    let formatChars = {
        '1': '[0-2]',
        '2': '[0-9]',
        '3': '[0-5]',
        '4': '[0-9]'
    };

    let beforeMaskedValueChange = (newState, oldState, userInput) => {
        let { value } = newState;

        // Conditional mask for the 2nd digit base on the first digit
        if(value.startsWith('2'))
        formatChars['2'] = '[0-3]'; // To block 24, 25, etc.
        else
        formatChars['2'] = '[0-9]'; // To allow 05, 12, etc.
        return {value, selection: newState.selection};
    }

    return (

        <main style={{ height: '100%' }}>

            <LoadingBar
                color='#000000'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                height={5}
            />

            <section>
                {id ? (
                    <PageTitle title="Edição de Feira" />
                ) : (
                    <PageTitle title="Cadastro de Feira" />
                )}

            </section>

            <section id='formulario' style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <FormContainer container>
                    <Grid item xs={8} className={classes.gridCell}>
                        <CustomTextField
                            name='nmFeira'
                            label='Nome da Feira'
                            inputProps={{ maxLength: 200 }}
                            value={values.nmFeira}
                            error={errors.nmFeira !== undefined && touched.nmFeira !== undefined}
                            helperText={errors.nmFeira !== undefined && touched.nmFeira !== undefined ? `${errors.nmFeira}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={2} className={classes.gridCell}>
                        <InputMask
                            mask={mask}
                            placeholder='HH-MM'
                            value={values.hrInicio}
                            onChange={(e) => {
                                setFieldValue('hrInicio', e.target.value)
                            }}
                            formatChars={formatChars}
                            beforeMaskedValueChange={beforeMaskedValueChange}
                        >
                            {() => <TextField
                                label="Hora Início"
                                value={values.hrInicio}
                            />}
                        </InputMask>
                    </Grid>

                    <Grid item xs={2} className={classes.gridCell}>
                        <InputMask
                            mask={mask}
                            placeholder='HH-MM'
                            value={values.hrTermino}
                            onChange={(e) => setFieldValue('hrTermino', e.target.value)}
                            formatChars={formatChars}
                            beforeMaskedValueChange={beforeMaskedValueChange}
                        >
                            {() => <TextField
                                label="Hora Término"
                                value={values.hrTermino}
                            />}
                        </InputMask>
                    </Grid>

                    <Grid item xs={12} style={{ borderBottom: `1px solid`, color: '#2B1B17', marginBottom: '30px' }} />

                    <Grid item xs={10} className={classes.gridCell}>
                        <CustomTextField
                            name='endereco.rua'
                            label='Rua'
                            value={values.endereco.rua}
                            error={errors.endereco !== undefined && touched.endereco !== undefined}
                            helperText={errors.endereco !== undefined && touched.endereco !== undefined ? `${errors.endereco}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={2} className={classes.gridCell}>
                        <CustomTextField
                            name='endereco.numero'
                            label='Número'
                            type='number'
                            value={values.endereco.numero}
                            error={errors.endereco !== undefined && touched.endereco !== undefined}
                            helperText={errors.endereco !== undefined && touched.endereco !== undefined ? `${errors.endereco}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} className={classes.gridCell}>
                        <CustomTextField
                            name='endereco.bairro'
                            label='Bairro'
                            value={values.endereco.bairro}
                            error={errors.endereco !== undefined && touched.endereco !== undefined}
                            helperText={errors.endereco !== undefined && touched.endereco !== undefined ? `${errors.endereco}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={5} className={classes.gridCell}>
                        <CustomTextField
                            name='endereco.cidade'
                            label='Cidade'
                            value={values.endereco.cidade}
                            error={errors.endereco !== undefined && touched.endereco !== undefined}
                            helperText={errors.endereco !== undefined && touched.endereco !== undefined ? `${errors.endereco}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={3} className={classes.gridCell}>
                        <CustomTextField
                            name='endereco.estado'
                            label='Estado'
                            value={values.endereco.estado}
                            error={errors.endereco !== undefined && touched.endereco !== undefined}
                            helperText={errors.endereco !== undefined && touched.endereco !== undefined ? `${errors.endereco}` : ''}
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} style={{ borderBottom: `1px solid`, color: '#2B1B17', marginBottom: '30px' }} />

                    <EditarDiasSemanaFeira
                        setFieldValue={setFieldValue}
                        handleBlur={handleBlur}
                        values={values}
                        initialValues={initialValues}
                        errors={errors}
                        touched={touched}
                    />

                </FormContainer>
            </section>

            <div style={{ marginLeft: '20vh', marginTop: '10px' }}>
                <CancelButton onClick={() => history('/admin/feiras')}>CANCELAR</CancelButton>
                <FinalizarButton onClick={(e: any) => handleSubmit(e)}>FINALIZAR</FinalizarButton>
            </div>

        </main>
    )



    async function handleSubmitFormik(values: FeiraAdminModel): Promise<void> {

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



export default EditarAdminFeira
