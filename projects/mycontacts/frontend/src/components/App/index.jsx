import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/GlobalStyle';
import defatulTheme from '../../styles/theme/defatul';
import { Container } from './style';

import { Header } from '../Header';
import { ContactsList } from '../ContactsList';

function App() {
  return (
    <ThemeProvider theme={defatulTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
