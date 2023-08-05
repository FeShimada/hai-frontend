import React from 'react';
import MaterialUITextField, { TextFieldProps } from '@mui/material/TextField';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';

/**
 * Componente TextField customizado com máscara para tempo (hh:mm:ss)
 *
 * @param {TextFieldProps} props
 */
function TextFieldTempo(props: TextFieldProps): JSX.Element {
  const { type, onChange, style, inputProps, variant, ...others } = props;
  const theme = useTheme();

  // Função para formatar o valor em tempo na máscara hh:mm:ss
  const formatTimeValue = (value: string) => {
    let timeValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    timeValue = timeValue.padStart(6, '0'); // Garante que o valor tem 6 dígitos, preenchendo com zeros à esquerda

    const hours = timeValue.substring(0, 2);
    const minutes = timeValue.substring(2, 4);
    const seconds = timeValue.substring(4, 6);

    return `${hours}:${minutes}:${seconds}`;
  };

  // Função para disparar o evento onChange com a string formatada
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const formattedValue = formatTimeValue(e.target.value);
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        value: formattedValue,
      },
    };
    onChange && onChange(syntheticEvent);
  };

  return (
    <ThemeProvider
      theme={createTheme({
        ...theme,
        components: {
          ...theme.components
        }
      })}
    >
      <MaterialUITextField
        variant={variant ?? 'standard'}
        autoComplete='off'
        color='primary'
        {...others}
        style={{ width: '100%', ...style }}
        inputProps={{ autoComplete: 'off', ...inputProps }}
        type={type === 'number' || !type ? 'text' : type}
        onChange={(e) => {
          if (type === 'number' && !isNaN(+e.target.value)) {
            e.target.value = e.target.value.split('e').join('').split('E').join('');
            handleInputChange(e); // Call the custom function to handle formatted input
          } else if (type !== 'number') {
            handleInputChange(e); // Call the custom function to handle formatted input
          }
        }}
      />
    </ThemeProvider>
  );
}

export default TextFieldTempo;
