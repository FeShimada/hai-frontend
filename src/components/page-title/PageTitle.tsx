import React from 'react';
import styled from 'styled-components';

// Definindo os tipos das props do componente
interface PageTitleProps {
  title: string;
}

const Title = styled.h1`
  font-size: 2.5rem; /* Tamanho da fonte aumentado */
  margin-bottom: 40px; /* Espaçamento na parte inferior */
  margin-top: 40px;
  text-align: center; /* Centralização do texto */
`;

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Title>{title}</Title>
  );
};

export default PageTitle;
