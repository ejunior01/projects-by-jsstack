import { Container, InputSearchContainer } from './style';

import Logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="MyContacts" width="201px" />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
    </Container>
  );
}
