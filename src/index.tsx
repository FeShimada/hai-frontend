import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles'
import { createRoot } from "react-dom/client";
import { theme } from './utils/constants'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import 'moment/locale/en-gb';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <StylesThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocalizationProvider>
      </StylesThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);


