import axios from "axios"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import CustomButton from "../../../../components/button/Button"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import LoadingBar from "react-top-loading-bar"
import DeleteButton from "../../../../components/button/DeleteButton"
import SwalComponent from "../../../../components/swal/Swal";
import Swal from "sweetalert2"
import PageTitle from "../../../../components/page-title/PageTitle"
import FeiraAdminModel from "../model/FeiraAdminModel"

const AdminFeira = () => {

    const [data, setData] = useState<FeiraAdminModel[]>([])
    const [selected, setSelected] = useState<FeiraAdminModel | undefined>();
    const [progress, setProgress] = useState(0)
    const history = useNavigate();

    useEffect(() => {
        setProgress(40)
        axios.get('http://localhost:8080/feira').then(res => {
            setData(res.data)
        }).catch(e => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Erro',
                text: 'Erro ao carregar dados',
                icon: 'error',
            })
        })
        setProgress(100)
    }, [])

    const collumns = [
        {
            name: 'Nome',
            selector: (row: FeiraAdminModel) => row.nmFeira,
            sortable: true
        },
        {
            name: 'Hora de Início',
            selector: (row: FeiraAdminModel) => row.hrInicio,
        },
        {
            name: 'Hora de Término',
            selector: (row: FeiraAdminModel) => row.hrTermino,
        },
        {
            name: 'Endereco',
            selector: (row: FeiraAdminModel) => row.endereco.bairro,
            sortable: true
        }
    ]

    const handleClickEdit = () => {
        if (!selected) return;
        setSelected(undefined)
        history(`/admin/feiras/editar/${selected.idFeira}`);
    };

    const handleClickDelete = () => {
        if (!selected) return;

        Swal.fire({
            title: 'Carregando...',
            didOpen: () => {
                Swal.showLoading()
            },
            allowEscapeKey: false,
            allowOutsideClick: false,
        })

        axios.delete('http://localhost:8080/feira/' + selected.idFeira).then(res => {
            setData(data.filter(produto => produto.idFeira !== selected.idFeira))
            SwalComponent({
                showConfirmButton: true,
                title: 'Sucesso',
                text: 'Deletado com sucesso',
                icon: 'success'
            });
        }).catch(e => {
            SwalComponent({
                showConfirmButton: true,
                title: 'Erro',
                text: 'Erro ao deletar',
                icon: 'error',
            })
        })
        setSelected(undefined)
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
                <PageTitle title="Lista de Feiras" />
            </section>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <div style={{ width: '80%', marginTop: '50px' }} >

                    <CustomButton
                        disabled={selected ? false : true}
                        onClick={handleClickEdit}
                    >Editar</CustomButton>

                    <DeleteButton disabled={selected ? false : true}  onClick={handleClickDelete} />

                    <DataTable
                        columns={collumns}
                        data={data}
                        selectableRows={true}
                        onSelectedRowsChange={(rows) => {
                            setSelected(rows.selectedRows[0]);
                        }}
                        selectableRowsHighlight
                        fixedHeader
                        selectableRowsNoSelectAll={true}
                        pagination
                        customStyles={{
                            cells: {
                                style: {
                                    fontSize: '14px',
                                    padding: '8px',
                                },
                            },
                        }}
                        selectableRowsSingle
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            position: "fixed",
                            top: '280px',
                            right: "300px",
                            borderRadius: "20%",
                            width: "5px",
                            height: "40px",
                            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                            zIndex: 9999
                        }}
                        onClick={() => history('/admin/feiras/novo')}
                    >
                        <AddIcon />
                    </Button>
                </div>
            </div>
        </main>


    )
}

export default AdminFeira
