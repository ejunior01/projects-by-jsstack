import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/GlobalStyle';
import defatulTheme from '../../styles/theme/defatul';
import { Container } from './styles';

import { Header } from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defatulTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
