import { Link } from 'react-router-dom';
import { Container } from './style';

import PropTypes from 'prop-types';

import arrow from '../../assets/icons/arrow.svg';

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h2>{title}</h2>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
