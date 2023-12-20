import { Container } from './style';
import PropTypes from 'prop-types';

export default function FieldGroup({ children }) {
  return <Container>{children}</Container>;
}

FieldGroup.propTypes = {
  children: PropTypes.node,
};
