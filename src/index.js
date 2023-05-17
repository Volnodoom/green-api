import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { ThemeProvider } from 'styled-components';
import * as S from './app/app.style';
import { defaultTheme } from './themes/default-theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <App />
    </ThemeProvider >
  </React.StrictMode>
);

