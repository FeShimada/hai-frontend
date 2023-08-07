import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const NotFoundMessage = styled.p`
  font-size: 18px;
  color: #666;
`;

const PageNotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>Oops! Página não encontrada.</NotFoundHeading>
      <NotFoundMessage>
        Desculpe, a página que você está procurando não foi encontrada.
      </NotFoundMessage>
    </NotFoundContainer>
  );
};

export default PageNotFound;
