import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  top: 280px;
  right: 200px;
  background-color: ${props => (props.disabled ? '#888' : 'black')}; /* Altere a cor de fundo se estiver desabilitado */
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')}; /* Altere o cursor se estiver desabilitado */
  font-size: 16px;
  transition: background-color 0.2s;
  z-index: 9999; /* Set a high z-index to ensure it overlays everything */

  /* Highlight effect on hover */
  &:hover {
    background-color: ${props => (props.disabled ? '#888' : '#333')}; /* Altere a cor de fundo no hover se estiver desabilitado */
    border: 1px solid ${props => (props.disabled ? '#888' : '#fff')}; /* Altere a borda no hover se estiver desabilitado */
  }
`;

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: (() => boolean) | boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, disabled }) => {

  const isDisabled = typeof disabled === 'function' ? disabled() : disabled;

  return <Button onClick={onClick} disabled={isDisabled}>{children}</Button>;
};

export default CustomButton;
