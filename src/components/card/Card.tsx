import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

const CardContainer = styled(Card)`
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
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

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CustomCard: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt="Card Image" />
      <CardContentWrapper>
        <CardTitle variant="h2">{title}</CardTitle>
        <CardDescription variant="body1">{description}</CardDescription>
      </CardContentWrapper>
    </CardContainer>
  );
};

export default CustomCard;