import {
  Container,
  Header,
  Card,
  ListContainer,
  InputSearchContainer,
  CardList,
} from './style';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <CardList>
          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Edvan Ribeiro</strong>
                <small>Instragram</small>
              </div>
              <span>ejunior01@github.com</span>
              <span>(011) 99999-9999</span>
            </div>
            <div className="actions">
              <Link to="/edit/1234">
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Edvan Ribeiro</strong>
                <small>Instragram</small>
              </div>
              <span>ejunior01@github.com</span>
              <span>(011) 99999-9999</span>
            </div>
            <div className="actions">
              <Link to="/edit/1234">
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        </CardList>
      </ListContainer>
    </Container>
  );
}
