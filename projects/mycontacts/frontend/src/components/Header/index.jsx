import { Container } from './style';

import Logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="MyContacts" width="201px" />
    </Container>
  );
}
