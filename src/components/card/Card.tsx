import React from 'react';
import { Card, CardContent, Typography, useMediaQuery } from '@mui/material';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const CardContainer = styled(Card)`
  position: relative;
  width: 90%;
  margin-top: 10px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;

  /* Adicione as classes de responsividade */
  @media (max-width:769px) {
    width: 100%;
    height: auto;
  }

`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContentWrapper = styled(CardContent)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
`;

const CardTitle = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardDescription = styled(Typography)`
  font-size: 14px;
  text-align: center;
`;

const CardPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px;
  color: #fff;

  @media (max-width: 769px) {
    font-size: 16px;
    padding: 6px;
  }
`;

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  idProduto: string | undefined;
}

const CustomButton = styled.button`
  margin-top: 10px;
  width: 80%;
  
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
  margin-bottom: 10px;

  @media (max-width:769px) {
    width: 100%;
    height: auto;
  }

  /* Highlight effect on hover */
  &:hover {
    background-color: #333;
    border: 1px solid #fff;
  }
`;

const ContainerAll = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  &:hover {
  background-color: #333;
  border: 2px solid #fff;
  cursor: pointer;
}
`;

const CustomCard: React.FC<CardProps> = ({ imageUrl, title, description, price, idProduto }) => {
  // Utilize useMediaQuery para detectar se a tela é menor que 600px
  const isSmallScreen = useMediaQuery('(max-width:769px)');

  return (
    <div style={{ margin: '20px' }} >

      <Link to={`/produtos/view/${idProduto}`} style={{ textDecoration: 'none' }}>
        <ContainerAll>
          <CardContainer>
            <CardImage src={imageUrl} alt="Card Image" />

            {/* Ajuste o conteúdo do card dependendo do tamanho da tela */}
            {isSmallScreen ? (
              <CardContentWrapper>
                <CardTitle variant="h4">{title}</CardTitle>
                <CardDescription variant="body2">{description}</CardDescription>
                <CardPrice>R$ {formatNumberWithMask(price)}</CardPrice>
              </CardContentWrapper>
            ) : (
              <CardContentWrapper>
                <CardTitle variant="h2">{title}</CardTitle>
                <CardDescription variant="body1">{description}</CardDescription>
                <CardPrice>R$ {formatNumberWithMask(price)}</CardPrice>
              </CardContentWrapper>

            )}
          </CardContainer>

          <CustomButton>Ver Mais</CustomButton>
        </ContainerAll>
      </Link>




    </div>


  );
};

export const formatNumberWithMask = (value: any) => {
  if (!value || isNaN(value)) return '';
  return parseFloat(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });
};

export default CustomCard;
