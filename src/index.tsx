import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles'
import { theme } from './utils/constants'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <StylesThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StylesThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


