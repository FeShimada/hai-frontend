import { FormikErrors, FormikTouched } from "formik";
import React, { useEffect, useState } from "react";
import FeiraAdminModel from "../model/FeiraAdminModel";
import { styled } from "@mui/material/styles";
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DiasDaSemanaEnum from "../enums/DiaSemanaEnum";
import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import Table  from '../../../../components/datatable/DataTable'

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


export type EditarDiasSemanaPropType = {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
    values: FeiraAdminModel
    errors: FormikErrors<FeiraAdminModel>;
    touched: FormikTouched<FeiraAdminModel>;
    initialValues: FeiraAdminModel
};

function EditarDiasSemanaFeira(props: EditarDiasSemanaPropType): JSX.Element {

    const FormContainer = styled(Grid)({
        background: "#f2f2f2", // Change to a light shade
        padding: "20px 30px", // Reduce lateral padding
        width: '80%',
        borderRadius: 10
    });

    const classes = useStyles();

    const { setFieldValue, values } = props;

    const [diaSemana, setDiaSemana] = useState<number>(0)
    const [data, setData] = useState<DiasDaSemanaEnum[]>(values.diasSemana);

    const handleChangeDiaSemana = (event: SelectChangeEvent<number>) => {
        setDiaSemana(event.target.value as number);
    };

    useEffect(() => {
        setData(values.diasSemana);
    }, [values.diasSemana]);

    const handleClickAdd = () => {

        setData([...data, diaSemana])
        setFieldValue('diasSemana', [...data, diaSemana])
    }

    return (
        <FormContainer container>

            <Grid item xs={4} className={classes.gridCell}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Dias da Semana</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={diaSemana}
                        label="Dias da Semana"
                        onChange={handleChangeDiaSemana}
                    >
                        <MenuItem value={DiasDaSemanaEnum.SEGUNDA}>Segunda</MenuItem>
                        <MenuItem value={DiasDaSemanaEnum.TERCA}>Terça</MenuItem>
                        <MenuItem value={DiasDaSemanaEnum.QUARTA}>Quarta</MenuItem>
                        <MenuItem value={DiasDaSemanaEnum.QUINTA}>Quinta</MenuItem>
                        <MenuItem value={DiasDaSemanaEnum.SEXTA}>Sexta</MenuItem>
                        <MenuItem value={DiasDaSemanaEnum.SABADO}>Sabado</MenuItem>
                        <MenuItem value={DiasDaSemanaEnum.DOMINGO}>Domingo</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Button
                variant="contained"
                color="primary"
                style={{
                    top: '8px',
                    right: "10px",
                    borderRadius: "20%",
                    width: "5px",
                    height: "40px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    zIndex: 9999
                }}
                onClick={handleClickAdd}
            >
                <AddIcon />
            </Button>

            <div style={{maxWidth: '50%', marginRight: '600px'}}>
                <Table data={data} setData={setData} setFieldValue={setFieldValue}/>
            </div>

        </FormContainer>
    )
}


export default EditarDiasSemanaFeira
