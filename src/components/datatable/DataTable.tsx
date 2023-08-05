import React from "react";
import DiasDaSemanaEnum from "../enums/DiaSemanaEnum";
import "./style.css"; // Import the CSS file with styles

interface TableProps {
    data: DiasDaSemanaEnum[];
    setData: React.Dispatch<React.SetStateAction<DiasDaSemanaEnum[]>>
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const Table = ({ data, setData, setFieldValue }: TableProps) => {

    const handleShowDay = (day: DiasDaSemanaEnum) => {
        switch (day) {
            case DiasDaSemanaEnum.DOMINGO:
                return "Domingo";
            case DiasDaSemanaEnum.SEGUNDA:
                return "Segunda-feira";
            case DiasDaSemanaEnum.TERCA:
                return "Terça-feira";
            case DiasDaSemanaEnum.QUARTA:
                return "Quarta-feira";
            case DiasDaSemanaEnum.QUINTA:
                return "Quinta-feira";
            case DiasDaSemanaEnum.SEXTA:
                return "Sexta-feira";
            case DiasDaSemanaEnum.SABADO:
                return "Sábado";
            default:
                return "";
        }
    }

    const handleClickDelete = (day: DiasDaSemanaEnum) => {
        var newData = data.filter(dia => dia !== day)
        setData(newData)
        setFieldValue('diasSemana', newData)
    }

    return (
        <div className="table-container"> {/* Add the container class */}
            <table>
                <thead>
                    <tr>
                        <th>Dias da Semana</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((day, index) => (
                        <tr key={index}>
                            <td>
                                {handleShowDay(day)}
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleClickDelete(day)}
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
