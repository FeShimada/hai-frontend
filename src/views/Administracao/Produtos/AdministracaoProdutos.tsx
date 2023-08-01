import axios from "axios"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import ProdutoModel from "../../Produtos/model/produto-model"

const AdministracaoRestaurantes = () => {

    const [data, setData] = useState<ProdutoModel[]>([])

    useEffect(() => {
        axios.get('http://localhost:8080/produto').then(res => {
            setData(res.data)
            console.log(res)
        }).catch(e => {
            console.log('erro')
        })
    }, [])

    const collumns = [
        {
            name: 'Nome',
            selector: (row:ProdutoModel) => row.nmProduto,
            sortable: true
        },
        {
            name: 'Preço',
            selector: (row: ProdutoModel) => row.nrPreco,
            sortable: true
        },
        {
            name: 'Descrição',
            selector: (row:ProdutoModel) => row.dsProduto,
            sortable: true
        },
        {
            name: 'Imagem',
            selector: (row:ProdutoModel) => row.dsImagem
        }
    ]

    return (
        <div style={{maxWidth: '800px', width:'100%'}} >
            <DataTable
                columns={collumns}
                data={data}
                fixedHeader
                selectableRows
                pagination
                customStyles={{
                    cells: {
                      style: {
                        fontSize: '14px',
                        padding: '8px',
                      },
                    },
                  }}
            />
        </div>
    )
}

export default AdministracaoRestaurantes
