import axios from "axios"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import ProdutoModel from "../../Produtos/model/produto-model"
import CustomButton from "../../../components/button/Button"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import LoadingBar from "react-top-loading-bar"

const AdministracaoRestaurantes = () => {

    const [data, setData] = useState<ProdutoModel[]>([])
    const [selected, setSelected] = useState<ProdutoModel | undefined>();
    const [progress, setProgress] = useState(0)
    const history = useNavigate();

    useEffect(() => {
        setProgress(40)
        axios.get('http://localhost:8080/produto').then(res => {
            setData(res.data)
        }).catch(e => {
            console.log('erro')
        })
        setProgress(100)
    }, [])

    const collumns = [
        {
            name: 'Nome',
            selector: (row: ProdutoModel) => row.nmProduto,
            sortable: true
        },
        {
            name: 'Preço',
            selector: (row: ProdutoModel) => row.nrPreco,
            sortable: true
        },
        {
            name: 'Descrição',
            selector: (row: ProdutoModel) => row.dsProduto,
            sortable: true
        },
        {
            name: 'Imagem',
            cell: (row: ProdutoModel) => <img src={row.dsImagem} alt="Imagem do produto" style={{ width: '50px', height: '50px' }} />,
        }
    ]

    const handleClickEdit = () => {
        if (!selected) return;
        history(`/admin/produtos/editar/${selected.idProduto}`);
    };

    return (

        <main style={{ height: '100%' }}>

            <LoadingBar
                    color='#000000'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                    height={5}
                />

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
                            top: "140px",
                            right: "300px",
                            borderRadius: "20%",
                            width: "5px",
                            height: "40px",
                            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                            zIndex: 9999
                        }}
                        onClick={() => history('/admin/produtos/novo')}
                    >
                        <AddIcon />
                    </Button>
                </div>
            </div>
        </main>


    )
}

export default AdministracaoRestaurantes
