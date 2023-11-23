import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import { CustomThemeProvider } from './context/CustomThemeProvider';

export default function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Layout />
    </CustomThemeProvider>
  );
}
