import React from "react";
import FeiraAdminModel from "../Feiras/model/FeiraAdminModel";
import SituacaoRegistroEnum from "../Feiras/model/SituacaoRegistroEnum";
import "./style.css"; // Import the CSS file with styles

interface TableProps {
    data: FeiraAdminModel[];
    setData: React.Dispatch<React.SetStateAction<FeiraAdminModel[]>>
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const Table = ({ data, setData, setFieldValue }: TableProps) => {

    const handleClickDelete = (feira: FeiraAdminModel) => {
        var newData = data.filter(feiraObj => feiraObj.idFeira !== feira.idFeira);
        feira.stRegistro = SituacaoRegistroEnum.DELETE
        setData(newData)
        setFieldValue('feiras', [...newData, feira])
        
    }

    return (
        <div className="table-container"> {/* Add the container class */}
            <table>
                <thead>
                    <tr>
                        <th>Feiras Relacionadas</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((feira, index) => (
                        <tr key={index}>
                            <td>
                                {feira.nmFeira}
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleClickDelete(feira)}
                                    style={{
                                        padding: "8px 16px",
                                        backgroundColor: "#ff0000",
                                        color: "#ffffff",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                    }}
                                >
                                    
                                    deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
