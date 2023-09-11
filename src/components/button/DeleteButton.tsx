import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the MUI delete icon

const RoundButton = styled.button`
  background-color: ${props => (props.disabled ? '#888' : 'red')}; /* Altere a cor de fundo se estiver desabilitado */
  color: white;
  padding: 10px;
  border-radius: 50%; /* Make the button round */
  border: none;
  outline: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')}; /* Altere o cursor se estiver desabilitado */
  font-size: 0; /* Hide text content */
  transition: background-color 0.2s;
  z-index: 9999; /* Set a high z-index to ensure it overlays everything */

  /* Highlight effect on hover */
  &:hover {
    background-color: ${props => (props.disabled ? '#888' : 'darkred')}; /* Altere a cor de fundo no hover se estiver desabilitado */
  }
`;

interface DeleteButtonProps {
  onClick: () => void;
  disabled?: (() => boolean) | boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, disabled }) => {
  const isDisabled = typeof disabled === 'function' ? disabled() : disabled;

  return (
    <RoundButton onClick={onClick} disabled={isDisabled}>
      <DeleteIcon fontSize="small" /> {/* MUI delete icon */}
    </RoundButton>
  );
};

export default DeleteButton;
